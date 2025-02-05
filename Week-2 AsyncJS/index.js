const fs = require('fs');
const print = function(err, data) {
    console.log(data);
}
// fs.readFile("a.txt", "utf-8", print); // Asynchronous

const contentOfSecondFile = fs.readFileSync("b.txt", "utf-8") // Synchronous
// console.log(contentOfSecondFile);

// readFile promisified
// resolve is the function we'll pass in .then()
function readTheFile(resolve) {
    fs.readFile('a.txt', 'utf-8', (err, data) => resolve(data));
}

const readFilePromisified = function() {
    return new Promise(readTheFile);
}


readFilePromisified().then(contents => console.log(contents));