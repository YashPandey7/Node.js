const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("buffer.txt");
    
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });

    rstream.on("end", () => {
        res.end();
    });

    rstream.on("err", (err) => {
        res.end("File Not Found!");
    });
});

server.listen(8000, "127.0.0.1",() => {
    console.log(`Server running at port 8000`);
});

// const rstream = fs.createReadStream("buffer.txt");

// setTimeout(() => {
//     const data = rstream.read(10);
//     console.log(data);
// }, 500);