// WORKING WITH STREAMS
export {}
let fs = require('fs')

let file = 'streamable.txt'
let text = 'Lorem does it work?\nI,m awesome\nAmn\'t I\n I love potatoes'

let stream = fs.createWriteStream(file)
stream.write(text)
stream.end();
stream.on('error',(error: never)=>{
    console.error(error)
})
stream.on('finish',()=>{
    console.log("Data successfully written")
    let storage: string
    let readStream = fs.createReadStream(file)
    readStream.on('data',(chunk:string)=>{
        storage += chunk
    })
    readStream.on('error',(err:never)=>{
        console.error(err)
    })
    readStream.on('end',()=>{
        console.log(storage)
    })
})
