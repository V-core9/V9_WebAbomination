(async () => {

  const { cluster } = require('./modules');
  const app = require('express')();

  await require('./middleware')(app);
  await require('./routes')(app);

  cluster(app, { port: 2500, count: 6 });

})();
