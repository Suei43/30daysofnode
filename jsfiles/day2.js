"use strict";
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('text.txt', (err) => {
        if (err)
            throw err;
        console.log("File reading..");
    });
    console.log("File already read");
});
