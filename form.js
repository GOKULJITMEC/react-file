const http = require("http");
const srv = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>FORM-PAGE</title></head>");
    res.write(`<body><h1>FORM HEAD</h1><form action="/message" method="POST"><input type="text" name="message"><br><input type="submit" value="SEND"></form></body>`
    );
    res.write("</html>");
    // process.exit()
    return res.end;
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>NEXT HEAD</title></head>");
  res.write("<body><h1>HEAD-2</h1></body>");
  res.write("</html>");
  res.end();
});
srv.listen(1997);
