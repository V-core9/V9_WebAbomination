const { login, refreshToken } = require('../handlers').auth;

module.exports = (app) => {

  app.route('/auth/login/')
    .get([
      (req, res) => res.send('login'),
    ])
    .post([
      login,
    ]);


  app.route('/auth/token/')
    .get([
      (req, res) => res.send('token'),
    ])
    .post([
      refreshToken,
    ]);

};
