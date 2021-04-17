import * as csvToJson from 'convert-csv-to-json';

export const generateJsonOutput = () => {
    const fileInputName = 'out.csv';
    const fileOutputName = 'out.json';

    csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);
}

generateJsonOutput();