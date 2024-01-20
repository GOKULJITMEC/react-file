const http = require('http');
const srv = http.createServer(function (req, res) {
  console.log(req);
});
srv.listen(1000);/*get request from server */
