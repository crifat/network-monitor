import fastcsv from 'fast-csv';
import fs from 'fs';

export const writeToFile = (data) => {
    const ws = fs.createWriteStream("out.csv", { flags: 'a' });
    fastcsv
        .write([data], { headers: false, includeEndRowDelimiter: true })
        .pipe(ws);
}