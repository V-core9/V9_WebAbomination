const { post } = require('../../../handlers').app;

module.exports = async (app) => {
  await app.get('/blog/', [post.blog]);
  await app.get('/blog/:slug', [post.bySlug]);
};
