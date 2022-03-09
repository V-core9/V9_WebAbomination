module.exports = async (app, data = {}) => {
  const port = data.port || 8080;
  const count = data.count || 1;
  const totalCPUs = (require("os").cpus().length > count) ? count : require("os").cpus().length;
  const cluster = require("cluster");

  if (cluster.isMaster) {
    for (let i = 0; i < totalCPUs; i++) {
      cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
      cluster.fork();
    });
  } else {
    //! Start listening on port
    app.listen(port, async () => {
      console.log('App Started! PATH: http://localhost:' + port + '/');
    });
  }
};
