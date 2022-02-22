module.exports = apiRoutes = async (router) => {

  await router.get("/api/", async (req, res) => {
    res.end(JSON.stringify(router, true, 4));
  });

  await require('./auth')(router);
  await require('./page')(router);
  await require('./post')(router);
  await require('./user')(router);
};
