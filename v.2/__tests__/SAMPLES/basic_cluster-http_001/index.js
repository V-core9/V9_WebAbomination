var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {
  var numCPUs = 8;
  console.log('Master cluster setting up ' + numCPUs + ' workers...');
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer(async (req, res) => {
    res.writeHead(200);
    res.end('process ' + process.pid + ' says hello!');
  }).listen(8000);
}
