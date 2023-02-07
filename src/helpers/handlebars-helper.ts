import fs from 'fs';
import handlebars from 'handlebars';

export const handlebarsCompileToHtml = async (templatePath: string): Promise<HandlebarsTemplateDelegate> => {

    const templateFile = await fs.promises.readFile(templatePath, {
        encoding: 'utf-8',
    });
    
    return handlebars.compile(templateFile);
};
