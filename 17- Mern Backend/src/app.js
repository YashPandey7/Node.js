const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
require("./db/conn");
const RegisterModel = require("./models/register");

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
        // res.send(req.body.firstname);
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword)
        {
            const registerCustomer = new RegisterModel({
                firstname  :   req.body.firstname,
                lastname    :   req.body.lastname,
                email       :   req.body.email,
                contact     :   req.body.contact,
                password : password,
                confirmpassword : cpassword
            });

            const registered = await registerCustomer.save();
            res.status(201).render("login");
        }
        else{
            res.send("Password do not match!");
        }

    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await RegisterModel.findOne({email:email});
        console.log(useremail.password);
        if(useremail.password === password){
            res.status(201).render("loggedin",{
                firstname : useremail.firstname,
                lastname : useremail.lastname,
                email : email,
                password : password
            });
        }else{
            res.send("Password do not match");
        }
    }catch(err){
        res.status(400).send(`Invalid Email ${err}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})