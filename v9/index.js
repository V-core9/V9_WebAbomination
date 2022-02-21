const { cluster, router } = require('../modules');

(async () => {
  await require('./middleware')(router);
  await require('./routes')(router);
  cluster({ port: 2500, maxCpu: 0.75 });
})();
