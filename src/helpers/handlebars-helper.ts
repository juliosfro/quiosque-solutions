import fs from 'fs';
import handlebars from 'handlebars';

export const handlebarsCompileToHtml = async (templatePath: string): Promise<HandlebarsTemplateDelegate> => {

    const templateFile = await fs.promises.readFile(templatePath, {
        encoding: 'utf-8',
    });
    
    return handlebars.compile(templateFile);
};

export const registerPartialAndCompileToHtml = async (partialName: string, templatePath: string,): Promise<any> => {
    const templateFile = await fs.promises.readFile(templatePath, {
        encoding: 'utf-8',
    });

    await handlebars.registerPartial(partialName, templateFile);

    return handlebars.compile(templateFile);

};
