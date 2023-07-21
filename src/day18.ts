// UNDERSTANDING THE DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCRONOUS

export {}
let fs = require('fs')
let time: any = new Date()
let starttime: number = time.getTime()
let content = fs.readFileSync('streamable.txt')
console.log(content)
let endtime:number = time.getTime()
// console.log(Number(endtime)-Number(time))
console.log(<number>endtime - <number>starttime )
