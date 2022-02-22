const { login, register } = require('../../../handlers').api.auth;

module.exports = async (router) => {
  router.post('/api/auth/login', [login]);
  router.post('/api/auth/register', [register]);
};
