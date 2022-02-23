const { encryptPassword, randomBytesGenerator } = require('../../helpers');

module.exports = class User extends require('../base') {
  constructor() {
    super();
    this.type = 'user';

    this.register = async (email, username, password, passConf) => {
      if (!email || !username || !password || !passConf) return false;

      const salt = await randomBytesGenerator();
      const passwordHash = await encryptPassword(password, salt);

      return await this.create({
        email: email,
        username: username,
        salt: salt,
        password: passwordHash,
        accountType: 'user',
        active: true,
        verified: false,
      });
    };

    this.login = async (username, password) => {
      const userData = await this.byArgs({ username: username });

      if (encryptPassword(password, userData.salt) === userData.password) {
        return true;
      } else {
        return false;
      }
    };

    this.byUsername = async (slug) => {
      return await this.byArgs({ username: slug });
    };

  }
};
