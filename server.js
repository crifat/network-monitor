import * as http from 'http';
import fs from 'fs';


export const startServer = () => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Max-Age": 2592000, // 30 days
        'Content-Type': 'text/json'
        /** add other headers as per requirement */
    };
    http.createServer(function (req, res) {
        res.writeHead(200, headers);
        fs.readFile('out.json', (err, data) => {
            res.write(data);
            res.end();
        })
    }).listen(3003);
}