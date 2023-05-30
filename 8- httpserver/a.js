const fs = require("fs");
const http = require('http');

fs.readFile("API.json", "utf-8", (err, data)=>{
    // console.log(data);
    const org_data = JSON.parse(data);
    // console.log(org_data[0].name);
    const server = http.createServer((req,res)=> {
        if(req.url == "/"){
            res.end(org_data[0].name);
        }
        else if(req.url == "/about")
        {
            res.end(org_data[1].name);
        }
        else {
            res.writeHead(404, {"content-type":"text/html"});
            res.end("<h1>404 Page not found</h1>");
        }
    });

    server.listen(8000, "127.0.0.1", ()=>{
        console.log("Staring server at port no. 8000 ");
    });
});