const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/conn_demo")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    ctype : {
        type:String,
        required:true,
        lowercase:true,
        enum:["frontend", "backend", "database"]
    },
    videos : Number,
    author : String,
    date : {
        type:Date,
        default:Date.now
    }
});

const Playlist = new mongoose.model("course", playlistSchema);

const data = async() => {
    try {
        const nodeplaylist = new Playlist({
            name:"Node js",
            ctype:"Backend",
            videos:35,
            author:"Thapa Technical"
        });

        const result =await nodeplaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

data();