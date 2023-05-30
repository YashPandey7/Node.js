const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url == "/")
    {
        res.end("Home Page");
    }
    else if(req.url == "/about")
    {
        res.end("About Page");
    }
    else if(req.url == "/contact")
    {
        res.end("Contact Page");
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1>404 Error!! Page not found</h1>")
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no. 8000");
});