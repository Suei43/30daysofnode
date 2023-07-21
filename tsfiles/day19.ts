let qs = require('querystring')
let data: object = qs.parse('id=1&name=rj&name=njsera&tutorial=30daysofnode&creator=nodejsera')
console.log(data)

let data2: object = qs.parse('id%2&name%reij&name%njsera2&tutorial%30daysofnode&creator%nodejsera', '&', '%')
console.log(data2)

console.log(qs.stringify(data))