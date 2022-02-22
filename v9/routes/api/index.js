module.exports = apiRoutes = async (app) => {

  await app.get("/api/", async (req, res) => {
    res.end(JSON.stringify(app, true, 4));
  });

  await require('./auth')(app);
  await require('./page')(app);
  await require('./post')(app);
  await require('./user')(app);
};
