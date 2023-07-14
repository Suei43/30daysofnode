const server = require("http")
const port = 3000

console.log("Hello World");

server.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Server is running");
    if(req){
        console.log(typeof req)
    }
    else{
        console.log("Empty request")
    }
    res.end()
}).listen(3000,(err)=>{
    if(err){
        return console.log(err)
    }
    console.log(`Server is running on port: ${port}`)
})