const express = require("express");
const path = require("path");
const app = express();

// APP CONFIG

app.use((req, rest, next) => {
  console.log("Middleware");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
// for form
app.use(express.urlencoded({ extended: false }));
// for JSON
app.use(express.json());

// ------------------------------------------------------------------GET
app.get("/", (req, res) => {
  res.send("Start learning");
});

// pass parametr to URL
app.get("/contact", (req, res) => {
  res.send(
    `<h1>Normal path</h1> Without parametrs `

    // `<h1>Normal path</h1> Without parametrs ${req.query.skip}-${req.query.limit}` if we have query
  );
});
app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Normal path</h1> Parametr: ${req.params.id}`);
});
// pass query to URL
app.get("/contact?skip=0&limit=10", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Normal path</h1> ${req.query}`);
});
app.get("/login", (req, res) => {
  res.send(
    '<form action="/login" method="POST"><label>Name: <input name="name" type="text" /></label><label>Password: <input name="password" type="text" /></label><button type="submit">Submit</button></form>'
  );
});

// ------------------------------------------------------------------POST

app.post("/login", (req, rest) => {
  const { name, password } = req.body;
  console.log(password);
  console.log(name);
});

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // work with Json
});

// app.get("/con?tact", (req, res) => {
//   res.send("<h1>Prev symbol can be 1 time or not be at all</h1>");
// });
// app.get("/con+tact", (req, res) => {
//   res.send("<h1>Prev symbol can be 1 time or a lot of times</h1>");
// });
// app.get("/con*tact", (req, res) => {
//   res.send("<h1>Here can be one o several different symbols</h1>");
// });
app.listen(5000, () => {
  console.log("My first app is going on port 5000");
});
