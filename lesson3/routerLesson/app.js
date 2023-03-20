const myRouter = require("./my-router");
const express = require("express");
const app = express();

app.use("/my-router", myRouter);

app.all("/anything", (req, res, next) => {
  console.log("Anything method");
  next();
});
app
  .route("/blog")
  .get((req, res) => {
    res.send("get method");
  })
  .post((req, res) => {
    res.send("Add smth to resource");
  })
  .put((req, res) => {
    res.send("update smth");
  });
app.listen(5000, () => {
  console.log("My first app is going on port 5000");
});
