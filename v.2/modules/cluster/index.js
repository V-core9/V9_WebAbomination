module.exports = async (data = {}) => {
  const port = data.port || 8000;

  const count = data.count || 1;
  const coreCount = require("os").cpus().length;
  const totalCPUs = (count < coreCount) ? count : coreCount;

  const cluster = require("cluster");

  if (cluster.isMaster) {
    for (let i = 0; i < totalCPUs; i++) {
      cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
      cluster.fork();
    });
  } else {

    const app = require('express')();

    await require('../../middleware').init(app);
    await require('../../routes')(app);

    //! Start listening on port
    app.listen(port, async () => {
      console.log('App Started! PATH: http://localhost:' + port + '/');
    });
  }
};
