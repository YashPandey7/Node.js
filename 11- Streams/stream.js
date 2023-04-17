const fs = require('fs');
const http = require('http');

const server = http.createServer();

// server.on("request", (req, res) => {
//     fs.readFile("API.json", "utf-8", (err, data) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         res.end(data);
//     });
// });

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("API.json");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });

    rstream.on("end", ()=> {
        res.end();
    });

    rstream.on("error", (err)=>{
        console.log(err);
        // res.writeHead(404, {"content-type": "html/text"});
        res.end("<h1>404! Page not found</h1>");
    });
});

server.listen(8000, "127.0.0.1");