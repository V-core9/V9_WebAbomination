const crypto = require('crypto');

module.exports = saltGenerator = async (count = 32) => {
  return new Promise((resolve, reject) => {
    try {
      return resolve(crypto.randomBytes(count).toString('hex'));
    } catch (error) {
      return reject(error);
    }
  });
};
