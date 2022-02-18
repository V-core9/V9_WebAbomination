module.exports = class Post extends require('../base') {
  constructor() {
    super();
    this.type = 'post';
    this.blog = async () => await all(this.type);
  }
};
