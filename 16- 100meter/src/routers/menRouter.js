const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

router.post("/mens", async(req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        const insertMens = await addingMensRecords.save();

        res.status(201).send(insertMens);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/mens", async(req, res) => {
    try{
        const getMens = await MensRanking.find();
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/mens/:name", async(req, res) => {
    try{
        const name1 = req.params.name;
        const getMens = await MensRanking.find({name : name1});
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
});


router.patch("/mens/:id", async(req, res) => {
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

router.delete("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const DeleteMen = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(DeleteMen);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;