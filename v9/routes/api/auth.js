const { login, register } = require('../../handlers').api.auth;

module.exports = async (app) => {
  app.post('/api/auth/login', [login]);
  app.post('/api/auth/register', [register]);
};
