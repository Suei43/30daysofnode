export{}
let zlib = require('zlib')
let fs = require('fs')
// console.log(zlib)

let read: any = fs.createReadStream('streamable.txt')
let write: any= fs.createWriteStream('streamable.txt.gz')

read.pipe(zlib.createGzip()).pipe(write);
console.log('Successfully zipped')

//TO UNZIP THE FILE 
let unread: any = fs.createReadStream('streamable.txt.gz')
let unwrite: any = fs.createWriteStream('unstreamable.txt')

unread.pipe(zlib.createUnzip()).pipe(unwrite)
console.log("Successfully unzipped.")