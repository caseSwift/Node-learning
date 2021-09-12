const http = require('http')

http.createServer((req,res)=>{
    res.write("This is response")
    res.end();
}).listen(5000,()=>console.log('server is running'))