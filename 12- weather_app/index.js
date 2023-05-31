// <!-- Api key = a849289d3181fe9212af4dd4a844bdaa -->
// <!-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} -->

// <!-- https://api.openweathermap.org/data/2.5/weather?q=Gorakhpur&appid=74138d35774f7d3a50eb758b44faa9ff -->

const http = require("http");
const fs = require("fs");
var requests = require("request");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if(req.url == "/")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Gorakhpur&appid=74138d35774f7d3a50eb758b44faa9ff")
        .on("data", (chunk) => {
            console.log(chunk.toString());
        })
        .on("end", (err) => {
            if(err) return console.log("Connection closed due to errors:", err);
            console.log("end");
        });
    }

});

server.listen(8000, "127.0.0.1");