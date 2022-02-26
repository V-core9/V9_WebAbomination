var http = require('http');
const port = 8000;


function v9(req, res) {
  res.writeHead(200);
  res.end('process ' + process.pid + ' says hello! ');
}

console.log(`Starting server @ HTTP://LOCALHOST:${port}/`);
http.createServer(v9).listen(port);
