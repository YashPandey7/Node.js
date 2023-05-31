const path = require("path");
const express = require("express");
const app = express();

// console.log(path.join(__dirname, "/public"));
const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));

app.get("/", (req, res)=> {
    res.send("Welocme to home page");
});

app.get("/about", (req, res)=> {
    res.send("Welocme to About page");
});

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});