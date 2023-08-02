const express = require("express");
const app = express();
const path = require("path");

const staticpath = path.join(__dirname,"/partials");
app.use(express.static(staticpath));

app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/about", (req, res) => {
    res.write("<h1>About Page</h1>");
    res.write("<p> - Yash Pandey</p>");
    res.send();
});

app.get("/temp", (req, res) => {
    res.send([{
        name: 'John',
        age : 20,
    },{
        name:'Mary',
        age :35,
    },
]);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
})