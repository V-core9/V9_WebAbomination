(async () => {

  const { cluster } = require('./modules');
  const app = require('express')();

  await require('./middleware').init(app);
  await require('./routes')(app);

  cluster(app, { port: 3000, count: 8 });

})();
