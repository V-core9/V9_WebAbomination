const { post } = require('../../handlers').app;
var cache = require('route-cache');

module.exports = async (app) => {
  await app.get('/blog/', [cache.cacheSeconds(30), post.blog]);
  await app.get('/blog/:slug', [cache.cacheSeconds(30), post.bySlug]);
};
