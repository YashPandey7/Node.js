const fs = require("fs");

// fs.writeFileSync("read.txt", "Welcome to my channel");
// fs.writeFileSync("read.txt","Thapa Technical, Welcomes you all!");
// fs.appendFileSync("read.txt", " Yash Pandey Here.");

// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("read.txt", "readwrite.txt");

// fs.mkdirSync("Lec");

// fs.writeFileSync("Lec/Bio.txt", "Hello Everyone");    
// fs.appendFileSync("Lec/Bio.txt", " -Dark Batman");

// const buf_data = fs.readFileSync('Lec/Bio.txt');
// // console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);

// const data = fs.readFileSync('Lec/Bio.txt',"utf-8");
// console.log(data);

fs.renameSync("Lec/Bio.txt", "Lec/myBio.txt");