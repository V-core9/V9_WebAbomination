const { page } = require('../../handlers').api;
var cache = require('route-cache');

module.exports = async (app) => {
  app.route('/api/page/')
    .get([cache.cacheSeconds(1), page.list])
    .post(page.create);


  app.route('/api/page/:id')
    .get([cache.cacheSeconds(1), page.byId])
    .put(page.update)
    .delete(page.delete);

  app.get('/api/page/purge/', [page.purge]);
};
