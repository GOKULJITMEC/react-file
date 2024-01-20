const http = require("http");
const fs = require("fs");
const srv = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>THE PAGE</title></head>");
    res.write(`<body></body>`);
  }

  res.setHeader("content-type", "text/html");

  if (url === "/message" && method == "POST") {
    res.setHeader("location", "/");
    res.statusCode = 302;
    fs.writeFileSync("h1o.txt", "Welcome To Learn Node Js");
    return res.end();
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write(`<head><title>THE PAGE</title></head>`);
  res.write(`<body>
<h2>THE NODE JS</h2>
</body>`);
  res.write("</html>");
  res.end();
});
srv.listen(7000);
