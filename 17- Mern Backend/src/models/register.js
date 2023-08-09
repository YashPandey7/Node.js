const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    contact : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    confirm_password : {
        type : String,
        required : true
    }
});

const Register = new mongoose.model("register", registerSchema);

module.exports = Register;