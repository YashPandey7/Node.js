const express = require("require");
const app = express();

// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

app.listen(8000, () => {
    console.log("Server is Running");
});