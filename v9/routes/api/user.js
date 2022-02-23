const { user } = require('../../../handlers').api;

module.exports = async (app) => {
  app.get('/api/user/', [user.list]);
  app.post('/api/user/', [user.create]);

  app.get('/api/user/purge/', [user.purge]);

  app.get('/api/user/:id', [user.byId]);
  app.put('/api/user/:id', [user.update]);
  app.delete('/api/user/:id', [user.delete]);
};
