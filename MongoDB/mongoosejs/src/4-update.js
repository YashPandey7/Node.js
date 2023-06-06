const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/conn_demo")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
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

const updateData = async () => {
    try {
        const result = await Playlist.updateMany({name : 'Node'},
        {
            $set : {name : 'Node js'}
        });
        console.log(result);
    }
    catch(err){ 
        console.log(err);
    };
}

updateData();