const crypto = require('crypto');

module.exports = saltGenerator = async (count = 32) => crypto.randomBytes(count).toString('hex');
