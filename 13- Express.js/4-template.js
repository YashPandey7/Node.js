const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates");

// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
    res.render("index", {
        Username:"Yash Pandey",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(8000, () => {
    console.log("Server is running");
});