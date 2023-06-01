const path =  require("path");
const express = require("express");
const app = express();
const hbs = require('hbs');

const templatePath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index", {
        Username:"Yash Pandey",
    });
});

app.get("/about", (req, res) => {
    res.render("index", {
        Username:"Yash Pandey",
    });
});

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "404! About us page not found",
    });
});

app.get("*", (req, res) => {
    res.render("index", {
        errorcomment: "404! Page not found",
    });
});

app.listen(8000, () => {
    console.log('Server is running');
});