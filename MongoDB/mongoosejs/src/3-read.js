const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/conn_demo")
.then(()=> {
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log(err);
});

const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    ctype : String,
    videos : Number,
    author : String,
    date : {
        type:Date,
        default:Date.now
    }
});

const Playlist = new mongoose.model("course", playlistSchema);

const getData = async() => {
    try{
        const result = await Playlist.find();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

getData();