const Base = require('../base');
module.exports = class User extends Base {
  constructor(app) {
    super(app);
    this.type = 'user';
  }
};
