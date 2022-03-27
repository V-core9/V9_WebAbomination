const { user } = require('../handlers');
const { validateAccessToken, validateAdmin } = require('../middleware');

module.exports = (app) => {
  app.route('/user/:page?/:perPage?')
    .get([
      validateAccessToken,
      validateAdmin,
      user.list
    ])
    .post([
      user.create
    ]);

  app.route('/user/me')
    .get([
      validateAccessToken,
      user.getMe
    ])
    .put([
      validateAccessToken,
      user.updateMe
    ])
    .delete([
      validateAccessToken,
      user.deleteMe
    ]);


  app.route('/user/:username')
    .get([
      validateAccessToken,
      user.byUsername
    ]);

  app.route('/user/byId/:id')
    .get([
      validateAccessToken,
      validateAdmin,
      user.byId
    ])
    .put([
      validateAccessToken,
      validateAdmin,
      user.update
    ])
    .delete([
      validateAccessToken,
      validateAdmin,
      user.delete
    ]);

  app.route('/user/purge/')
    .get([
      validateAccessToken,
      validateAdmin,
      user.purge
    ]);
};
