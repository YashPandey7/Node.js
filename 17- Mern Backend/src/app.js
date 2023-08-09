const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
require("./db/conn");
const Register = require("./models/register");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// For CSS
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    // res.send("Hello.... Home Page");
    res.render("index", {
        username : "Yash"
    });
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async(req, res) => {
    try{
        console.log(req.body.fisrtname);
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})