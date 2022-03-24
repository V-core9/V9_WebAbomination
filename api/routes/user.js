const { user } = require('../handlers');

module.exports = (app) => {
  app.route('/user/')
    .get([
      user.list
    ])
    .post([
      user.create
    ]);

  app.route('/user/:id')
    .get([
      user.byId
    ])
    .put([
      user.update
    ])
    .delete([
      user.delete
    ]);

  app.route('/user/purge/')
    .get([
      user.purge
    ]);
};
