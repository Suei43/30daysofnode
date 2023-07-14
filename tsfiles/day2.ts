const http = require('http')
const fs = require('fs')

http.createServer((req: object,res:any)=>{
    fs.readFile('text.txt',(err: object|string)=>{
        if(err)
            throw err
        console.log("File reading..")
    })
    fs.readFileSync('text.txt',(err: never,data: any)=>{
        if(err)
            throw err
        console.log("File reading 2")
    })
    //writeFile, writeFileSync
    //appendFile, appendFileSync
    //renameFile, renameFileSync
    //unlinkFile, unlinkFileSync
    console.log("File already read")
})