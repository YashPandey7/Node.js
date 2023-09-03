const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
require("./db/conn");
const RegisterModel = require("./models/register");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

            const token = await registerCustomer.generateAuthToken();

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

        const ismatch = await bcrypt.compare(password, useremail.password);
        // console.log(useremail.password);

        if(ismatch){
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

// const securepassword = async(password) => {
//     const hashpassword = await bcrypt.hash(password, 8);
//     console.log(hashpassword);

//     const matchpassword = await bcrypt.compare(password, hashpassword);
//     console.log(matchpassword);
// };
// 
// securepassword("yash1234");



// const createToken = async() => {
//     const token = await jwt.sign({_id : "64f4808c2af6de1ec1e23b97"}, "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ", {
//         expiresIn : "20 minutes"
//     });
//     console.log(token);

//     const userVerify = await jwt.verify(token, "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ");
//     console.log(userVerify);
// }

// createToken();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})