module.exports = class Page extends require('../base') {
  constructor() {
    super();
    this.type = 'page';
    this.home = async () => await this.byArgs({ slug: '/' });
    this.bySlug = async (slug) =>  await this.byArgs({ slug: slug , published: true});
  }
};
