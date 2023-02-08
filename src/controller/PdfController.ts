import { Request, Response } from 'express';
import path from 'path';
import { PDFOptions } from 'puppeteer';
import { handlebarsCompileToHtml } from '../helpers/handlebars-helper';
import { createPdf, errorPdfHtmlTemplate } from '../helpers/puppeteer-helper';

import Budget from '../model/budget';

const options: PDFOptions = {
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
};

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

            const templatePath = path.resolve(__dirname, '..', 'templates', 'layouts', 'pdf.hbs');
            const parsedTemplate = await handlebarsCompileToHtml(templatePath);
            const parsedHTML = parsedTemplate(produtos);

            const fileName = 'relatorio-de-ordens-de-producao.pdf';
            const stylePath = path.resolve(__dirname, '..', '..', 'public', 'css', 'styles.css');
            
            const pdfBuffer = await createPdf(parsedHTML, options, stylePath);
            response.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
            response
                .type('pdf')
                .status(201)
                .send(pdfBuffer);
        } catch (error: any) {
            const pdfBuffer = await errorPdfHtmlTemplate(error.message, options);
            response
                .type('pdf')
                .status(422)
                .send(pdfBuffer);
        }
    }
}
