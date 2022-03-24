module.exports = (app) => {
  app.get("/", [
    async (req, res) => {
      return res.status(200).json(require('express-list-endpoints')(app));
    },
  ]);

  require('./auth')(app);
  require('./page')(app);
  require('./post')(app);
  require('./role')(app);
  require('./user')(app);
};
