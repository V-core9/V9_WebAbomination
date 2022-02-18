const { cluster, router } = require('../modules');

(async () => {
  router.routes = require('./routes');
  cluster({ port: 3000, maxCpu: 0.75 });
})();
