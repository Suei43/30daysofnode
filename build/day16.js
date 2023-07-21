"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let zlib = require('zlib');
let fs = require('fs');
// console.log(zlib)
let read = fs.createReadStream('streamable.txt');
let write = fs.createWriteStream('streamable.txt.gz');
read.pipe(zlib.createGzip()).pipe(write);
console.log('Successfully zipped');
//TO UNZIP THE FILE 
let unread = fs.createReadStream('streamable.txt.gz');
let unwrite = fs.createWriteStream('unstreamable.txt');
unread.pipe(zlib.createUnzip()).pipe(unwrite);
console.log("Successfully unzipped.");
