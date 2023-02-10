import { readFile }  from 'fs/promises';
import handlebars from 'handlebars';

export const handlebarsCompileToHtml = async (templatePath: string): Promise<HandlebarsTemplateDelegate> => {
    
    const { compile } = handlebars;
    const templateFile = await readFile(templatePath, {
        encoding: 'utf-8',
    });
    
    return compile(templateFile);
};

export const registerPartialAndCompileToHtml = async (partialName: string, templatePath: string,): Promise<HandlebarsTemplateDelegate> => {
    
    const { compile } = handlebars;
    const templateFile = await readFile(templatePath, {
        encoding: 'utf-8',
    });

    /* Dentro da namespace Handlebars existem duas funcoes em sobrecarga com o nome registerPartial */
    await handlebars.registerPartial(partialName, templateFile);

    return compile(templateFile);

};
