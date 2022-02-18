const { cluster } = require('../modules');

(async () => {
  await require('./routes')();
  cluster({ port: 3000, maxCpu: 0.75 });
})();
