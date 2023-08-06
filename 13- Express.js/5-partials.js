const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index", {
        Username:"Yash Pandey",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        Username: "Yash Pandey",
    });
});

app.listen(8000, () => {
    console.log("Server is running");
});