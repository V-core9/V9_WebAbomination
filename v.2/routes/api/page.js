const { page } = require('../../handlers').api;

module.exports = (app) => {
  app
    .route('/api/page/')
    .get([page.list])
    .post(page.create);


  app
    .route('/api/page/:id')
    .get([page.byId])
    .put(page.update)
    .delete(page.delete);

  app.get('/api/page/purge/', [page.purge]);
};
