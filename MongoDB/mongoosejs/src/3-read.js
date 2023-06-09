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
        const result1 = await Playlist.find({ctype : "Back-end"}).select({name:1});
        console.log(result1);

        const result2 = await Playlist.find().select({name:1}).sort({name : 1});
        console.log(result2);
    }catch(err){
        console.log(err);
    }
}

getData();