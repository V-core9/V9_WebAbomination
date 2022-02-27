const { app } = require('../../handlers');

module.exports = applicationRoutes = async (expr) => {
  await expr.route('/application/')
    .get([jwtFromCookie, app.index]);
};
