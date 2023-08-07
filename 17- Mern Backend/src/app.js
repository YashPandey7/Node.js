const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
require("./db/conn");

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    // res.send("Hello.... Home Page");
    res.render("index", {
        username : "Yash"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})