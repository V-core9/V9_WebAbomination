module.exports = class User extends require('../base') {
  constructor() {
    super();
    this.type = 'user';
  }
};
