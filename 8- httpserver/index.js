const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == '/')
    {
        res.end("Hello Everyone, Welcome to Home Page");
    }
    else if(req.url == '/about')
    {
        res.end("Hello everyone, Welcome to About Page");
    }
    else if(req.url == '/contact')
    {
        res.end("Hello everyone, Welcome to Contact Page");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1>404 Error! Page not Found</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port 8000");
});