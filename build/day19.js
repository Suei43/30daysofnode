"use strict";
let qs = require('querystring');
let data = qs.parse('id=1&name=rj&name=njsera&tutorial=30daysofnode&creator=nodejsera');
console.log(data);
let data2 = qs.parse('id%2&name%reij&name%njsera2&tutorial%30daysofnode&creator%nodejsera', '&', '%');
console.log(data2);
console.log(qs.stringify(data));
