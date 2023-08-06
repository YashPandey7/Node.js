const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/conn_demo")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : String,
    skill : String,
    date : {
        type : Date,
        default : Date.now
    }
});

// Creating and connecting to collection
const Playlist = new mongoose.model("Playlist", playlistSchema);

// Inserting a document
const createDocument = async() => {
    try {
        const ReactPlaylist = new Playlist({
            name : "Batman",
            description : "Hello Everyone",
            skill : "c++"
        })
        
        const result = await ReactPlaylist.save();
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}

createDocument();