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

const data = async() => {
    try {
        const nodeplaylist = new Playlist({
            name:"Node",
            ctype:"Back-end",
            videos:35,
            author:"Thapa Technical"
        });

        const expressplaylist = new Playlist({
            name:"Express",
            ctype:"Back-end",
            videos:15,
            author:"Thapa Technical"
        });

        const mongodbplaylist = new Playlist({
            name:"Mongo-DB",
            ctype:"DataBase",
            videos:20,
            author:"Thapa Technical"
        });
        
        const result = Playlist.insertMany([nodeplaylist, expressplaylist, mongodbplaylist]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

data();