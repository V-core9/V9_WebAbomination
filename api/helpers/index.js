const crypto = require('crypto');

module.exports = helpers = {
  saltGenerator: async (count = 32) => crypto.randomBytes(count).toString('hex'),
};
