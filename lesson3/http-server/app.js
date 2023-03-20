const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url === "/") {
    res.write("<h2>Home page</h2>");
  } else if (url === "/contacts") {
    res.write("<h2>Contact page</h2>");
  } else {
    res.write("<h2>Page not found</h2>");
  }

  res.end();
});

server.listen(5000, () => {
  console.log("Server is running");
});
