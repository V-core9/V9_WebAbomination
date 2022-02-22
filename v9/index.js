
(async () => {

  const cluster = require('../modules/cluster');
  const express = require('express');
  const app = express();

  await require('./middleware')(app);
  await require('./routes')(app);

  cluster(app, {port: 2500, maxCpu: 0.75 });

})();
