const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./src/db/conn");
const MensRanking = require("./src/models/mens");

app.use(express.json());

app.post("/mens", async(req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        const insertMens = await addingMensRecords.save();

        res.status(201).send(insertMens);
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/mens", async(req, res) => {
    try{
        const getMens = await MensRanking.find();
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/mens/:name", async(req, res) => {
    try{
        const name1 = req.params.name;
        const getMens = await MensRanking.find({name : name1});
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
});

app.patch("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.status(201).send(updateMen);
    }catch(err){
        res.status(500).send(err);
    }
});

app.get("/", async (req, res) => {
    res.send("Hello EveryOne");
});
 
app.listen(port, () => {
    console.log(`Connected to port no. ${port}`);
});