var routeCache = require('route-cache');

module.exports = async (app) => {
  await app.get('/user/:username', [routeCache.cacheSeconds(10), user.byUsername]);
};
