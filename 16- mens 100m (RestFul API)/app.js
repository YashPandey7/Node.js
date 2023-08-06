const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./src/db/conn");
const MensRanking = require("./src/models/mens");
const router = require("./src/routers/menRouter");

app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
    res.send("Open the URL localhost:3000/mens");
});
 
app.listen(port, () => {
    console.log(`Connected to port no. ${port}`);
});