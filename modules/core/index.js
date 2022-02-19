module.exports = (data = {}) => {
  const express = require('express');
  const app = express();

  var port = data.port || 3000;
  var routes = require('../router').routes;
  var routePaths = Object.keys(routes);
  var middleware = require('../router').middleware;

  middleware.map( item => {
    app.use(item);
  });

  routePaths.map(routePath => {
    var route = routes[routePath];
    var methods = Object.keys(route);

    methods.map(method => {
      app[method](routePath, route[method]);
    });
  });

  app.listen(port, async () => {
    //console.log("Application Middleware List:" , middleware);
    //console.log("Available Routes List:" ,routes);
    console.log(`App listening at http://localhost:${port}`);
  });
};
