(async () => {
  const { cluster } = require('./modules');
  const app = require('express')();

  const middleware = require('./middleware');
  await middleware.init(app);

  await require('./routes')(app);

  cluster(app, { port: 2500, count: 6 });
})();
