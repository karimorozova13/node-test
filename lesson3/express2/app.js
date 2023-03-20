const express = require("express");
const books = require("./books");

const app = express();

// app.set('Json space',8) set response

app.get("/books", (req, res) => {
  //   res.send(books)
  //   res.json(null)
  res.json(books);
});

app.listen(5000, () => console.log("Server is running"));
