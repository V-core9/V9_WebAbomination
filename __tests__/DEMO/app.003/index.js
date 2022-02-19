const { cluster, router } = require('../../../modules');

(async () => {
  await require('./middleware')();
  await require('./routes')();
  cluster({ port: 3000, maxCpu: 0.25 });
})();
