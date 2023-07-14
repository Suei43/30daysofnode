const http = require('http')
const fs = require('fs')

http.createServer((req: object,res:any)=>{
    fs.readFile('text.txt',(err: object|string)=>{
        if(err)
            throw err
        console.log("File reading..")
    })
    console.log("File already read")
})