const readline = require("readline");
const fs = require("fs/promises");
const { program } = require("commander");
require("colors");

program.option(
  "-f, --file [type]",
  "file for saving game result",
  "result.txt"
);
program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const mind = Math.floor(Math.random() * 10) + 1;
const logFile = program.opts().file;

const isValid = (val) => {
  if (isNaN(val)) {
    console.log("Enter the number, please".red);
    return false;
  }
  if (val < 1 || val > 10) {
    console.log("Enter the number between 1-10".magenta);
    return false;
  }
  return true;
};

const log = async (data) => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`We safe game result here: ${logFile}`.green);
  } catch (error) {
    console.log(`We couldn't safe the file ${logFile}`.red);
  }
};

const game = () => {
  rl.question("Enter the number from 1 to 10 to win!".yellow, (value) => {
    let val = +value;
    if (!isValid(val)) {
      game();
      return;
    }
    count += 1;
    if (val === mind) {
      console.log(
        `Congratulations! You  enter correct number from ${count} times`.green,
        count
      );
      log(
        `${new Date().toDateString()}: Congratulations! You  enter correct number from ${count} times`
      ).finally(() => rl.close());
      return;
    }
    console.log("The number is incorrect. Try again".red);
    game();
  });
};

game();
