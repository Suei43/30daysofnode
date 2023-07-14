"use strict";
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('text.txt', (err) => {
        if (err)
            throw err;
        console.log("File reading..");
    });
    fs.readFileSync('text.txt', (err, data) => {
        if (err)
            throw err;
        console.log("File reading 2");
    });
    //writeFile, writeFileSync
    //appendFile, appendFileSync
    //renameFile, renameFileSync
    //unlinkFile, unlinkFileSync
    console.log("File already read");
});
