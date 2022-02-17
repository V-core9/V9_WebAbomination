module.exports = (data = {}) => {
  const express = require('express');
  const app = express();

  var port = data.port || 3000;
  var routes = data.routes || [];
  var routePaths = Object.keys(routes);

  routePaths.map(routePath => {
    var route = routes[routePath];
    var methods = Object.keys(route);
    methods.map(method => {
      app[method](routePath, route[method]);
    });
  });

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};
