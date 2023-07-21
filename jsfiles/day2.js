"use strict";
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('day1.js', (err, data) => {
        if (err)
            throw err;
        console.log("File 1: ", data);
    });
    console.log("File 2:", fs.readFileSync('day1.js'));
    //writeFile, writeFileSync
    //appendFile, appendFileSync
    //renameFile, renameFileSync
    //unlinkFile, unlinkFileSync
    console.log("File already read");
});
