"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fs = require('fs');
let file = 'streamable.txt';
let text = 'Lorem does it work?\nI,m awesome\nAmn\'t I\n I love potatoes';
let stream = fs.createWriteStream(file);
stream.write(text);
stream.end();
stream.on('error', (error) => {
    console.error(error);
});
stream.on('finish', () => {
    console.log("Data successfully written");
    let storage;
    let readStream = fs.createReadStream(file);
    readStream.on('data', (chunk) => {
        storage += chunk;
    });
    readStream.on('error', (err) => {
        console.error(err);
    });
    readStream.on('end', () => {
        console.log(storage);
    });
});
