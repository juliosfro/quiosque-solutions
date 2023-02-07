import puppeteer from 'puppeteer';

export const createPdf = async (parsedHTML: string): Promise<Buffer> => {

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

    return pdfBuffer;
};