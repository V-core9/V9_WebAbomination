makeSalt = async () => {
  return crypto.randomBytes(16).toString('hex');
};

encryptPassword = async (password, salt) => {
  return await v_to_sha256(password + salt);
};

module.exports = class User extends require('../base') {
  constructor() {
    super();
    this.type = 'user';

    this.register = async (email, username, password, passConf) => {
      if (!email || !username || !password || !passConf) return false;

      const salt = await makeSalt();
      const passwordHash = await encryptPassword(password, salt);

      return await this.create({
        email: email,
        username: username,
        salt: freshSalt,
        password: passwordHash
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
