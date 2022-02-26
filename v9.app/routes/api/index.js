const { stringifyJSON } = require('../../../helpers/asy');
var routeCache = require('route-cache');
var endpoints = require('express-list-endpoints');
module.exports = apiRoutes = async (app) => {
  await app.get("/api/", [routeCache.cacheSeconds(10), apiRoot = async (req, res) => {
    var appEndpoints = endpoints(app);
    var data = await stringifyJSON(appEndpoints);
    return res.status(200).end(data);
  }]);

  await require('./auth')(app);
  await require('./page')(app);
  await require('./post')(app);
  await require('./role')(app);
  await require('./user')(app);
};
