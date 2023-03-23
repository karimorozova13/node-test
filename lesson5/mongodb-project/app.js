const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { DB_Host, PORT = 5000 } = process.env;

mongoose
  .connect(`${DB_Host}`)
  .then(() => {
    console.log("Connected successfelly");
    app.listen(5000, () => console.log(33));
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
const app = express();
