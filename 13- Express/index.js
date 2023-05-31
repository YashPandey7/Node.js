const express = require("express");
const app = express();

// app.get(route, callback)
app.get("/", (req, res) => {
    res.write("<h1>Welcome to Home Page</h1>");
    res.write("<h2>Welcome to Home page again</h2>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

app.get("/temp", (req, res)=> {
    res.json([{
        "name": "Amit",
        "age": 20,
    },
    {
        "name": "Saurav",
        "age": 22,
    },
    {
        "name": "Yash",
        "age": 22,
    },
    ]);
});

app.listen(8000, () => {
    console.log("Server is Running");
});