import puppeteer, { PDFOptions } from 'puppeteer';

export const createPdf = async (parsedHTML: string, options: PDFOptions, stylePath: string): Promise<Buffer> => {

    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    // await pageContent.setViewport({ width: 761, height: 800 });
    await pageContent.setContent(parsedHTML);
    await pageContent.emulateMediaType('screen');
    await pageContent.addStyleTag({ path: stylePath });
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