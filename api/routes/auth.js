const { login, refreshToken, logout } = require('../handlers').auth;

module.exports = (app) => {

  app.route('/auth/login/')
    .post([
      login,
    ]);


  app.route('/auth/token/')
    .post([
      refreshToken,
    ]);

  app.route('/auth/logout/')
    .post([
      logout,
    ]);
};
