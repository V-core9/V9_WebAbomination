const { login, register } = require('../../handlers').api.auth;

module.exports = (app) => {
  console.log('Adding /api/auth/login');
  app
    .route('/api/auth/login')
    .get([(req, res) => res.send('register')])
    .post([login]);

  console.log('Adding /api/auth/register');
  app
    .route('/api/auth/register')
    .get([(req, res) => res.send('register')])
    .post([register]);

};
