const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === './'){
        res.end()
    }
    if(req.url === '/about'){
        res.end("here is our short history")
    }
    res.end(`
        <h1> empty </h1>
        <p> oops page is mpty</p>
        <a href= "./">back home</a> 
        `)
    
        

})

server.listen(5001)
