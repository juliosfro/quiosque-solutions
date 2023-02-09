import puppeteer, { PDFOptions } from 'puppeteer';

export const createPdfBuffer = async (parsedHTML: string, options: PDFOptions, stylePath: string): Promise<Buffer> => {

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

export const createHtmlContentWithStyle = async (parsedHTML: string, stylePath: string): Promise<string> => {
   
    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    await pageContent.setContent(parsedHTML);
    await pageContent.emulateMediaType('screen');
    await pageContent.addStyleTag({ path: stylePath });
    const pageContentHtml = await pageContent.content();
    await browser.close();
    return pageContentHtml;
};

export const errorPdfHtmlTemplate = async (error: string, options?: PDFOptions): Promise<Buffer> => {

    const defaultOptions: PDFOptions = {
        format: 'A4',
        displayHeaderFooter: true,
        printBackground: false,
        headerTemplate: '',
        footerTemplate: '',
        margin: {
            bottom: '30px',
            top: '30px',
            right: '30px',
            left: '30px',
        },
    };

    const optionsError = options || defaultOptions;

    const browser = await puppeteer.launch();
    const pageContent = await browser.newPage();
    await pageContent.emulateMediaType('screen');

    const content = 
    `<div>
       <h1 style="text-align:center;">Ocorreu um erro ao exibir o documento PDF.</h1>
       <p style="font-size: 18px;">Error message: ${error}</p>
    </div`;
    
    await pageContent.setContent(content);
    const pdfBuffer = await pageContent.pdf(optionsError);
    await browser.close();
    return pdfBuffer;
};