const v_to_sha256 = require('v_to_sha256');

module.exports = encryptPassword = async (password, salt) => {
  return new Promise(async (resolve, reject) => {
    var hash = await v_to_sha256(password + salt);
    try {
      return resolve(hash);
    } catch (error) {
      return reject(error);
    }
  });
};
