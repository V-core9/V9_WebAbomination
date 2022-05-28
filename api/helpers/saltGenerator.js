const crypto = require('crypto');

module.exports = async (count = 32) => crypto.randomBytes(count).toString('hex');
