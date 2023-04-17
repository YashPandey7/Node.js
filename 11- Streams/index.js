const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    if(req.url=="/")
    {
        res.end("Home Page");
    }
    else if(req.url == "/contact")
    {
        res.end("Contact Page ");
    }
    else if(req.url == "/info")
    {
        fs.readFile(`${__dirname}/API.json`, "utf-8", (err, data) => {
            // const orgdata = JSON.parse(data);
            console.log(data);
            res.end(data);
        });
    }
    else
    {
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<h1>404! Page Not Found</h1>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Hello");
});

