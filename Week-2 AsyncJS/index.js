const fs = require('fs');
const print = function(err, data) {
    console.log(data);
}
fs.readFile("a.txt", "utf-8", print); // Asynchronous

const contentOfSecondFile = fs.readFileSync("b.txt", "utf-8") // Synchronous
console.log(contentOfSecondFile);