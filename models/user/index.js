module.exports = class User extends require('../base') {
  constructor() {
    super();
    this.type = 'user';

    this.register = async ( data ) => {
      console.log(await this.create({data}));
    };

    this.login = async (username, password) => {
      return await this.byArgs({username: username});
    };

  }
};
