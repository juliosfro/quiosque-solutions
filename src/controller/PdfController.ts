import { Request, Response } from 'express';
import path from 'path';
import { handlebarsCompileToHtml } from '../helpers/handlebars-helper';
import { createPdf } from '../helpers/puppeteer-helper';

import Budget from '../model/budget';

export default class PdfController {
    public async create(request: Request, response: Response): Promise<any> {
        const { body } = request;
        const { orders: products } = body;

        const getTotal = (total: number, item: any) => total + (item.quantity * item.price);
        const total = products.reduce(getTotal, 0);

        const produtos: Budget = {
            ...body,
            total: `${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`,
        };

        const templatePath = path.resolve(__dirname, '..', 'template', 'pdf.hbs');
        const parsedTemplate = await handlebarsCompileToHtml(templatePath);
        const parsedHTML = parsedTemplate(produtos);
        const pdfBuffer = await createPdf(parsedHTML);
      
        const fileName = 'relatorio-de-ordens-de-producao.pdf';

        response.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        response.type('pdf').send(pdfBuffer);
        //  response.end(Buffer.from(pdfBuffer));
    }
}
