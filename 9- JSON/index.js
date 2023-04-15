const fs = require('fs');

const bioData = {
    name : "Yash",
    age : 21,
    branch : 'IT',
};

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// fs.writeFile("json1.json", jsonData, (err)=>{
//     console.log("Done");
// });

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
    console.log(orgData.branch);
});