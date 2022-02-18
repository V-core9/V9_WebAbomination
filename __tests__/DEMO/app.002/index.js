const { cluster, router } = require('../../../modules');

(async () => {
  //! Directly loading routes into the [router.routes] object.
  router.routes = require('./routes');
  //? Just a cluster start.
  cluster({ port: 3000, maxCpu: 0.75 });
})();
