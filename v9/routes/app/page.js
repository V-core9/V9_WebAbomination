const { page } = require('../../../handlers').app;

module.exports = async (app) => {
  await app.get('/', [page.home]);
  await app.get('/:slug', [page.bySlug]);
};
