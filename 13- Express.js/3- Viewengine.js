const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "/public");
// app.use(express.static(staticPath));

// To set the view engine
app.set("view engine", "hbs");

// Template engine route
app.get("/", (req, res)=> {
    res.render('index', {
        Username: "Yash",
    });
});

app.get("/", (req, res)=> {
    res.send("Home page");
});

app.listen(8000, () => {
    console.log("Server is running");
});