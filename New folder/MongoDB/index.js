const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testing")
.then(() => {
    console.log("Connected to MongoDB");

    const testSchema = new mongoose.Schema({
        name : {
            type: String,
            required : true,
        },
        age : {
            type : Number,
            required : true,
        },
        language : {
            type : String,
            required : true,
        },
        lastModified : {
            type : Date,
            default  : Date.now,
        }
    });
    
    const TestModel = new mongoose.model("sample", testSchema);
    
    const getDocument = async() => {
        try{
            const result = await TestModel.find();
            console.log(result);
        }catch(err){
            console.log(err);
        }
    };

    getDocument();

}).catch((err) => {
    console.log(err);
});