const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const payload = { id: 1309, userName: "Kari" };
const secret = "secret word";
const token = jwt.sign(payload, secret);
const decodedToken = jwt.decode(token);
const verify = jwt.verify(token, secret);
console.log(token);
console.log(decodedToken);
console.log(verify);

app.listen(5000, () => console.log("Server is running"));
