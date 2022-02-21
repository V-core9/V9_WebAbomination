const { router } = require("../../../../../modules");

module.exports = apiRoutes = async () => {

  await router.get("/api/", async (req, res) => {
    res.json({
      message: "Hello World"
    });
  });

  await require('./auth')();
  await require('./page')();
  await require('./post')();
  await require('./user')();
};
