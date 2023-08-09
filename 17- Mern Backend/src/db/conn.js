const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/GymRegistration")
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(`Failed To connect to MongoDB ${err}`);
})