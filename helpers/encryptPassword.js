const v_to_sha256 = require('v_to_sha256');

module.exports = encryptPassword = async (password, salt) => {
  return new Promise((resolve, reject) => {
    v_to_sha256(password + salt, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};
