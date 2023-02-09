import { Request, Response } from 'express';
import path from 'path';
import { PDFOptions } from 'puppeteer';
import { handlebarsCompileToHtml, registerPartialAndCompileToHtml } from '../helpers/handlebars-helper';
import { createPdf, errorPdfHtmlTemplate } from '../helpers/puppeteer-helper';

import Budget from '../model/budget';


export default class PdfController {
    public async create(request: Request, response: Response): Promise<any> {
        try {
            const { body } = request;
            const { orders: products } = body;

            const getTotal = (total: number, item: any) => total + (item.quantity * item.price);
            const total = products?.reduce(getTotal, 0);

            const produtos: Budget = {
                ...body,
                total: `${total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`,
            };

            const templatePath = path.resolve(__dirname, '..', 'templates', 'layouts', 'relatorio-ordens-producao.hbs');
            const partialHeaderPath = path.resolve(__dirname, '..', 'templates', 'layouts', 'header.hbs');

            const parsedHeader = await registerPartialAndCompileToHtml('header', partialHeaderPath);
            const header = parsedHeader(produtos);

            const parsedTemplate = await handlebarsCompileToHtml(templatePath);
            const parsedHTML = parsedTemplate(produtos);

            const fileName = 'relatorio-de-ordens-de-producao.pdf';
            const stylePath = path.resolve(__dirname, '..', '..', 'public', 'css', 'styles.css');

            const options: PDFOptions = {
                format: 'A4',
                displayHeaderFooter: true,
                printBackground: false,
                headerTemplate: header,
                footerTemplate: '',
                margin: {
                    bottom: '75px',
                    top: '195px',
                    right: '5px',
                    left: '5px',
                },
            };

            const pdfBuffer = await createPdf(parsedHTML, options, stylePath);
            response.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
            response
                .type('pdf')
                .status(201)
                .send(pdfBuffer);
        } catch (error: any) {
            const options = {};
            const pdfBuffer = await errorPdfHtmlTemplate(error.message, options);
            response
                .type('pdf')
                .status(422)
                .send(pdfBuffer);
        }
    }
}
