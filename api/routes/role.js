const { role } = require('../handlers');

module.exports = (app) => {
  app.route('/role/')
    .get([
      role.list
    ])
    .post([
      role.create
    ]);

  app.route('/role/:id')
    .get([
      role.byId
    ])
    .put([
      role.update
    ])
    .delete([
      role.delete
    ]);

  app.route('/role/purge/')
    .get([
      role.purge
    ]);
};
