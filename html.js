const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>HTML-PAGE</title></head>");
  res.write("<body><h1 style='color:red; text-align:center; margin:20px 0px 0px 0px'>PAGE HEADING</h1><br><p></p></body>");
  res.write("</html");
  res.end();
  process.exit()
});
server.listen(2000);