const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "/template/views");
const partialPath = path.join(__dirname, "/template/partials");
const cssPath = path.join(__dirname, "/template/public");

app.use(express.static(cssPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("3_index", {
        Username : "Yash",
    });
});

app.get("/about", (req, res) => {
    res.render("3_about", {
        Username : "batman",
    });
});

app.get("/about/*", (req, res) => {
    res.render("3_404", {
        err : "About us page not found!!",
    });
});

app.get("/*", (req, res) => {
    res.render("3_404", {
        err: `Page Not Found!`,
    });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});