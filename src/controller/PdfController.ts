import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';

import Budget from '../model/budget';

export default class PdfController {
  public async create(request: Request, response: Response): Promise<void> {
    const { body } = request;
    const { orders: products } = body;

    const getTotal = (total: number, item: any) => total + (item.quantity * item.price);
    const total = products.reduce(getTotal, 0);

    const produtos: Budget = {
      ...body,
      total: `${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`,
    };

    const templatePath = path.resolve(__dirname, '..', 'template', 'pdf.hbs');

    const templateFile = await fs.promises.readFile(templatePath, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFile);

    const parsedHTML = parseTemplate(produtos);

    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    await pageContent.emulateMediaType('screen');
    await pageContent.setContent(parsedHTML);

    const pdfBuffer = await pageContent.pdf({
      format: 'A4',
      displayHeaderFooter: true,
      printBackground: false,
      headerTemplate: '',
      footerTemplate: '',
      margin: {
        bottom: '50px',
        top: '50px',
        right: '30px',
        left: '30px',
      },
    });

    await browser.close();
    response.setHeader('Content-type', 'application/pdf');
    response.end(Buffer.from(pdfBuffer));
  }
}
