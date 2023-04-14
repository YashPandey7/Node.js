const fs = require("fs");

// fs.writeFileSync("read.txt", "Welcome to my channel");
// fs.writeFileSync("read.txt","Thapa Technical, Welcomes you all!");
// fs.appendFileSync("read.txt", " Yash Pandey Here.");

const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);
const org_data = buf_data.toString();
console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt");