const { user } = require('../../handlers').api;

module.exports = async (app) => {
  app.route('/api/user/')
    .get(user.list)
    .post(user.create);

  app.route('/api/user/:id')
    .get(user.byId)
    .put(user.update)
    .delete(user.delete);

  app.get('/api/user/purge/', [user.purge]);
};
