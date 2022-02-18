const Base = require('../base');
module.exports = class Post extends Base {
  constructor(app) {
    super(app);
    this.type = 'post';
    this.blog = async () => await all(this.type);
  }
};
