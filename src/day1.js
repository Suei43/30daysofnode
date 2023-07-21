"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const port = 3000;
const fs = require('fs');
console.log("Hello World");
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log("Server is running");
    if (req) {
        console.log(typeof req);
    }
    else {
        console.log("Empty request");
    }
    res.write("First res sent\n");
    fs.readFile('index.html', (err, data) => {
        if (err)
            throw err;
        console.log("Html file successfully sent!");
        res.end(data);
    });
}).listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server is running on port: ${port}`);
});
