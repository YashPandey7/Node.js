const os = require("os");

console.log(os.arch());
console.log(os.platform());

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);