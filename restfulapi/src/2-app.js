const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;
require("./db/conn");
const Student = require("./models/students");
const router = require("./routers/studentRouter");

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});