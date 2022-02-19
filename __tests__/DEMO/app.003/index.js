const { cluster, router } = require('../../../modules');

(async () => {
  router.routes = require('./routes');
  router.middleware = require('./middleware');
  cluster({ port: 3000, maxCpu: 0.25 });
})();
