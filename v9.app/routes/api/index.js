const { stringifyJSON } = require('../../../helpers/asy');
var endpoints = require('express-list-endpoints');
module.exports = (app) => {
  app.get("/api/", [apiRoot = async (req, res) => {
    var appEndpoints = endpoints(app);
    var data = await stringifyJSON(appEndpoints);
    return res.status(200).end(data);
  }]);

  require('./auth')(app);
  require('./page')(app);
  require('./post')(app);
  require('./role')(app);
  require('./user')(app);
};
