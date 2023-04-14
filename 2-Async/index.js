const fs = require("fs");

// File Creation 
// fs.writeFile("Bio.txt","Hello Everyone", (err)=> {
//     console.log("File Created");
//     console.log(err);
// });

// File Append 
// fs.appendFile("Bio.txt", " - Dark Batman", (err)=> {
//     console.log("Text added successfully");
//     console.log(err);
// });

// Read File
// fs.readFile('Bio.txt', "UTF-8", (err, data)=> {
//     console.log(data);
// });

fs.rename("myBio.txt", "Bio.txt", (err)=>{
    console.log(err);
});