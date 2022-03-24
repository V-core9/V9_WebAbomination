const { login, refreshToken } = require('../../handlers').api.auth;

module.exports = (app) => {
  console.log('Adding /api/auth/login');
  app
    .route('/api/auth/login')
    .get([(req, res) => res.send('register')])
    .post([login]);

  console.log('Adding /api/auth/token');
  app
    .route('/api/auth/token')
    .get([(req, res) => res.send('token')])
    .post([refreshToken]);

};
