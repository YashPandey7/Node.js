const fs = require("fs");

// fs.writeFileSync("a_read.txt", "Hello just for revision");

// const buf_data = fs.readFileSync("a_read.txt");
// const org_data = buf_data.toString();
// console.log(org_data);

const data = fs.readFileSync("a_read.txt", "utf-8");
console.log(data);

// fs.appendFileSync("a_read.txt", " - Yash Pandey");