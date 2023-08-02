const express = require("express");
const app = express();
const path = require("path");

const templatepath = path.join(__dirname, "/template/views");

app.set("view engine", "hbs");
app.set("views", templatepath);

app.get("/", (req, res) => {
    res.render('index', {
        Username : "Home",
    });
});

app.get("/about", (req, res) => {
    res.render('index', {
        Username : "About",
    });
});

app.get("/contact", (req, res) => {
    res.render("index", {
        Username : "Contact",
    });
});

app.listen(8000, () => {
    console.log(`Server started on port 8000`);
});