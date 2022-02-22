const { page } = require('../../../handlers').app;

module.exports = async (router) => {
  router.get('/', [page.home]);
  router.get('/:slug', [page.bySlug]);
};
