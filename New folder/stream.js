// const eventEmitter = require("event");
// const event = new eventEmitter();
const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("buffer.txt");
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1",() => {
    console.log(`Server is running on port 8000`);
})