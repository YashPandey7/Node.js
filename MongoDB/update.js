db.content.updateOne(
    {name : "smriti"},
    {
        $set : {name : "smriti patel", skill : "react js"}
    }    
)

db.content.updateOne(
    {name : "smriti patel"},
    {
        $set : {skill : ["react js", "python"]}
    }    
)

db.content.updateMany(
    {skill: "react js"},
    {
        $set : {skill : ["react", "python"]},
        $currentDate : {lastModified : true}
    }    
)

db.content.replaceOne (
    {skill: "react"},
    {name : "smriti patel", skill : "python"}
)