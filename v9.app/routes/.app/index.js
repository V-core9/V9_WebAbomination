const { app } = require('../../handlers');
const { jwtFromCookie } = require('../../../middleware');

module.exports = applicationRoutes = async (expr) => {
  await expr.route('/application/')
    .get([jwtFromCookie, app.index]);
};
