const express = require("express");
const moment = require("moment");
const cors = require("cors");
const fs = require("fs/promises");

const books = require("./books");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(async (req, res, next) => {
  console.log("First middleware", req.url);
  const { url, method } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./server.log", `\n ${method} ${url} ${date}`);

  next();
});

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   next();
// });

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/products", (req, res) => {
  res.json([]);
});
app.listen(3001, () => console.log("Server is running"));
