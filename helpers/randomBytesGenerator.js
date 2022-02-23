const crypto = require('crypto');

module.exports = randomBytesGenerator = async (count = 32) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(crypto.randomBytes(count).toString('hex'));
    } catch (error) {
      reject(error);
    }
  });
};
