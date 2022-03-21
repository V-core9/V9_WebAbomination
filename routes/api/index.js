var endpoints = require('express-list-endpoints');
module.exports = (app) => {
  app.get("/api/", [apiRoot = async (req, res) => {
    var appEndpoints = endpoints(app);
    return res.status(200).json(appEndpoints);
  }]);

  require('./auth')(app);
  require('./page')(app);
  require('./post')(app);
  require('./role')(app);
  require('./user')(app);
};
