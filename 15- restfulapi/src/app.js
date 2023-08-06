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

app.get("/students/:id", async(req, res) => {
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

app.patch("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(updateStudent);

    }catch(err) {
        res.status(404).send(err);
    }
});

app.delete("/students/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);

        if(!deleteStudent){
            return res.send(404).send();
        }
        res.send(deleteStudent);
    }catch(err){
        res.send(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});