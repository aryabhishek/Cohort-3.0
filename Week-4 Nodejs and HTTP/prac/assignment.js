import fs from "fs";

function main(filePath) {
  const data = fs.readFileSync(filePath, "utf-8"); // returs the contents of a file as a string
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == " ") total++;
  }
  console.log(total + 1);
}

import { Command } from "commander";
const program = new Command();

program
  .name("counter")
  .description("counts no of words in a file")
  .version("6.9");

program
  .command("count")
  .argument("<file>", "file to count")
  .action((filePath) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) console.log(err);
      else {
        const words = data.split(" ").length;
        console.log(`Your file has ${words} words.`);
      }
    });
  });

program.parse(); // this will let the commander use process.argv

// argv[0] -> location of node.exe
// argv[1] -> location of the current file
// argv[2-n] -> the arguments we give
// console.log(process.argv);

// const filePath = process.argv[2];
// main(filePath);
