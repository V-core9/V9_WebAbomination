
const { cluster } = require('../../../modules');

(async () => {
  await require('./middleware')();
  await require('./routes')();
  cluster({ port: 2500, maxCpu: 0.25 });
})();
