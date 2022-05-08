const vLog = require('./helpers/v_log');
const cluster = require("cluster");

const port = process.env.PORT || 8000;
const CORE_COUNT = (process.env.CORE_COUNT < require("os").cpus().length) ? process.env.CORE_COUNT : require("os").cpus().length;




if (cluster.isMaster) {


  //! APP START LOG MESSAGE
  vLog.log('APP STARTING.');


  //! exiting helpers
  process.on('SIGINT', async () => {
    vLog.warn("SIGINT Received.", "APP EXITING.");

    setTimeout(async () => process.exit(0), 1000);
  });

  process.on('beforeExit', (code) => {
    vLog.warn('Process beforeExit event with code: ', code);
    setTimeout(async () => process.exit(0), 1000);
  });

  process.on('exit', (code) => {
    vLog.warn('Process exit event with code: ', code);
    setTimeout(async () => process.exit(0), 1000);
  });
  //! EOF : exiting helpers


  //? CREATE CORE COUNT WORKERS
  for (let i = 0; i < CORE_COUNT; i++) {
    cluster.fork();
  }

  //? On Worker Exit -> Just re-fork into a new one.
  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
  });


} else {

  const app = require('express')();

  require('./config').init(app);
  require('./middleware')(app);
  require('./routes')(app);

  app.listen(port, async () => {
    console.log('App Started! PATH: http://localhost:' + port + '/');
  });

}


