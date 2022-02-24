
const cluster = require('../modules/cluster');
const express = require('express');
const app = express();

(async () => {
  await require('./middleware')(app);
  await require('./routes')(app);
  cluster(app, {port: 2500, count: 5 });
})();
