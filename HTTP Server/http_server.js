const http = require('http'); // taking the module

const requestListener = function (req, res) {
  res.writeHead(200);//setting http response headers
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);