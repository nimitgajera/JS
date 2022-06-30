var https = require("http")
console.log("https")
var server=https.createServer((req,res)=>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>hello<h1>")
    // console.log("liesting 7878")
})
server.listen(7878,()=>{
    console.log("listing 7878")
})
