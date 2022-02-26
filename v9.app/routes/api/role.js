const { role } = require('../../handlers').api;

module.exports = async (app) => {
  app.route('/api/role/')
    .get(role.list)
    .post(role.create);

  app.route('/api/role/:id')
    .get(role.byId)
    .put(role.update)
    .delete(role.delete);

  app.get('/api/role/purge/', [role.purge]);
};
