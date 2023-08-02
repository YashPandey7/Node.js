const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "/template/views");
const partialPath = path.join(__dirname, "/template/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("3_index", {
        Username : "Yash",
    });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});