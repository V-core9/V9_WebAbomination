const { page } = require('../../../handlers').api;

module.exports = async (app) => {
  app.get('/api/page/', [page.list]);
  app.post('/api/page/', [page.create]);

  app.get('/api/page/purge/', [page.purge]);

  app.get('/api/page/:id', [page.byId]);
  app.put('/api/page/:id', [page.update]);
  app.delete('/api/page/:id', [page.delete]);
};
