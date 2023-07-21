"use strict";
// UNDERSTANDING THE DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCRONOUS
Object.defineProperty(exports, "__esModule", { value: true });
let fs = require('fs');
let time = new Date();
let starttime = time.getTime();
let content = fs.readFileSync('streamable.txt');
console.log(content);
let endtime = time.getTime();
// console.log(Number(endtime)-Number(time))
console.log(endtime - starttime);
