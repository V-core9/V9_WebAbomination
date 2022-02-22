const { post } = require('../../../handlers').app;

module.exports = async (router) => {
  router.get('/blog/', [post.blog]);
  router.get('/blog/:slug', [post.bySlug]);
};
