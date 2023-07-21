"use strict";
let stringDecoder = require('string_decoder').StringDecoder;
let sd = new stringDecoder('utf8');
let buff = Buffer.from('data to be buffered');
//Print the buffered data
console.log(buff);
//Print the decoded buffer  
console.log(sd.write(buff));
