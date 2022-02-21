module.exports = apiRoutes = async (router) => {

  await router.get("/api/", async (req, res) => {
    res.json({
      message: "Hello World"
    });
  });

  await require('./auth')(router);
  await require('./page')(router);
  await require('./post')(router);
  await require('./user')(router);
};
