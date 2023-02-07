import puppeteer, { PDFOptions } from 'puppeteer';

export const createPdf = async (parsedHTML: string, options: PDFOptions): Promise<Buffer> => {

    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    await pageContent.emulateMediaType('screen');
    await pageContent.setContent(parsedHTML);

    const pdfBuffer = await pageContent.pdf(options);

    await browser.close();

    return pdfBuffer;
};

export const errorPdfHtmlTemplate = async (error: string, options: PDFOptions): Promise<Buffer> => {

    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    await pageContent.emulateMediaType('screen');
    
    const content = `
        <h2>Ocorreu um erro ao exibir o documento PDF.</h2>
        Error message: ${error}`;
    
    await pageContent.setContent(content);

    const pdfBuffer = await pageContent.pdf(options);

    await browser.close();

    return pdfBuffer;
};