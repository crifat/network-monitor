import * as csvToJson from 'convert-csv-to-json';

let fileInputName = 'out.csv';
let fileOutputName = 'out.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);