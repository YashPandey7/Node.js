const path = require('path');

// console.log(path.dirname("D:/Programming/Node/4- PATH Module/index.js"));
// console.log(path.extname("D:/Programming/Node/4- PATH Module/index.js"));
// console.log(path.basename("D:/Programming/Node/4- PATH Module/index.js"));

console.log(path.parse("D:/Programming/Node/4- PATH Module/index.js"));

const mypath = path.parse("D:/Programming/Node/4- PATH Module/index.js");
console.log(mypath.ext);