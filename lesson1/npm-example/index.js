console.log("Welcome home, friend");

const users = require("./users");
const { admins } = require("./users");

const currentMonth = require("./node-CommonJs/date").getCurrentMonth();
// const { getCurrentMonth } = require("./node-CommonJs/date");
// const currentMonth = getCurrentMonth();

console.log(users);
console.log(admins);
console.log(currentMonth);

// const ws = new require('ws') - immediatly invoked

// CALLBACK

// const fs = require("fs");
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error, "error");
//   console.log(data);
// });

// PROMISES

const fs = require("fs/promises");
// const fs =  require('fs').promises

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const fileOperation = async ({ filePath, action, data }) => {
  switch (action) {
    case "read":
      //   const file = await fs.readFile(filePath);
      //   const text = file.toString();
      //   console.log(text);
      const file = await fs.readFile(filePath, "utf-8");
      console.log(file);
      break;
    case "add":
      await fs.appendFile(filePath, data);
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;
  }
};

// fileOperation({ filePath: "./files/file.txt", action: "read" });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "add",
//   data: "\n Add to the file",
// });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "replace",
//   data: "Rewrite the file",
// });

fileOperation({
  filePath: "./files/file2.txt",
  action: "add",
  data: "\n Add to the file",
});

fileOperation({
  filePath: "./files/file3.txt",
  action: "replace",
  data: "Rewrite the file",
});
