const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs');
const requests = require("requests");

const templatePath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index", {
        Username: "Yash Pandey",
    });
});

app.get("/about", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=74138d35774f7d3a50eb758b44faa9ff`)
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            console.log(`city name is ${arrdata[0].name} and the temperature is ${arrdata[0].main.temp}`);

            res.write(arrdata[0].name);
        })
        .on("end", (err) => {
            if (err) return console.log("Connection closed due to errors:", err);
            res.end();
        });
});

app.get("*", (req, res) => {
    res.render("404", {
        Username: "Yash Pandey",
        errorcomment: "404! Page not found",
    });
});

app.listen(8000, () => {
    console.log('Server is running');
});