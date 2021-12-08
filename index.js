const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res) => {
    const reqPath = req.url
    if(reqPath === '/firstname'){
       res.end("welcome VAMSHI")
    }else if(reqPath === '/fullname'){
        res.end("welcome VAMSHI MEDIPALLY")
    }
    else if(reqPath === 'req.path'){
         res.end("welcome...!")
    }
   else{
       res.writeHead(404,{
           'contenttype':'text/html'
       })
    res.end("<h1>404 error<\h1>")
   }
    console.log(req.url)
    
})

server.listen(8000,'127.0.0.1',() => {
    console.log('listening on port 5000')
})