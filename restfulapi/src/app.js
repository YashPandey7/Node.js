const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;
require("./db/conn");
const Student = require("./models/students");

app.use(express.json());
// create a new students
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
    
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//     });
// });

app.post("/students", async(req, res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
});

app.get("/student/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }

    }catch(err){
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});