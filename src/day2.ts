const http = require('http')
const fs = require('fs')

http.createServer((req: object,res:any)=>{
    fs.readFile('day1.js',(err: object|string, data: string | any)=>{
        if(err)
            throw err
        console.log("File 1: ", data)
    })
    console.log("File 2:", fs.readFileSync('day1.js'))
    //writeFile, writeFileSync
    //appendFile, appendFileSync
    //renameFile, renameFileSync
    //unlinkFile, unlinkFileSync
    console.log("File already read")
})