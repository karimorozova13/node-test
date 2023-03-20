const express = require("express");
const app = express(); // app - web-server

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("<h2>Home page</h2>");
});
app.get("/contacts", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("<h2>Contacts page</h2>");
});
app.listen(5000, () => console.log("Server is running"));
