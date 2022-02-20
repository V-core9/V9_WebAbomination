module.exports = (data = {}) => {
  const express = require('express');
  const core = express();

  var port = data.port || 3000;

  const router = require('../router');
  var {routes, statics, middleware } = router;
  var routePaths = Object.keys(routes);

  // Set up middleware
  middleware.map( item => {
    core.use(item);
  });

  // Set up static files
  statics.map(item => {
    core.use(express.static(item, router.settings.statics));
  });

  // Set up routes
  routePaths.map(routePath => {
    var route = routes[routePath];
    var methods = Object.keys(route);

    methods.map(method => {
      core[method](routePath, route[method]);
    });
  });

  core.listen(port, async () => {
    console.log(`coreApp listening at http://localhost:${port}`);
  });
};
