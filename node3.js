const http = require('http');
const srv = http.createServer((req, res) => {
  console.log(req);
  process.exit();/* event loop*/
});
srv.listen(3000);
