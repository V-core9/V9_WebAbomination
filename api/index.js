const cluster = require("cluster");

if (cluster.isMaster) {

  const CORE_COUNT = (process.env.CORE_COUNT < require("os").cpus().length) ? process.env.CORE_COUNT : require("os").cpus().length;

  for (let i = 0; i < CORE_COUNT; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
  });

} else {
  const port = process.env.PORT || 8000;
  const app = require('express')();

  require('./config').init(app);
  require('./middleware')(app);
  require('./routes')(app);

  app.listen(port, async () => {
    console.log('App Started! PATH: http://localhost:' + port + '/');
  });
}
