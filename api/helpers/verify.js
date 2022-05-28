const { log } = require('./v_log');

const verify = require('v_rifier')();

verify.register('demoType', async (value) => true);

(async () => {
  log(await verify.listTypes());
})();

module.exports = verify;
