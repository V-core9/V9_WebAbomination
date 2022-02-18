const Base = require('../base');
module.exports = class Page extends Base {
  constructor(app) {
    super(app);
    this.type = 'page';
    this.home = async () => await this.byArgs({ slug: '/' });
  }
};
