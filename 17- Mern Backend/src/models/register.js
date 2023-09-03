const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    confirmpassword : {
        type : String,
        required : true
    },
    tokens : [{
        token : {
            type : String ,
            required : true
        }
    }]
});

// Generating Tokens
registerSchema.methods.generateAuthToken = async function () {
    try{
        const token = await jwt.sign({_id : this._id.toString()}, "IxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyf");

        this.tokens = this.tokens.concat({token: token});
        await this.save();
        console.log(token);
        return token;
    }catch(err){
        resizeBy.send(err);
        console.log(err);
    }
}


// Hashing
registerSchema.pre("save", async function(next) {

    if(this.isModified("password")){
        // console.log(`Current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`Current Hashing Password is ${this.password}`);

        this.confirmpassword = await bcrypt.hash(this.password, 10);
    }

    next();
})


const Register = new mongoose.model("register", registerSchema);

module.exports = Register;