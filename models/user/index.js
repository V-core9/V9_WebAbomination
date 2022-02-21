module.exports = class User extends require('../base') {
  constructor() {
    super();
    this.type = 'user';

    this.register = async ( email, username, password, passConf ) => {
      return await this.create({email: email, username: username, password: password});
    };

    this.login = async (username, password) => {
      return await this.byArgs({username: username});
    };

  }
};
