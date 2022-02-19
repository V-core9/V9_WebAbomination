module.exports = apiRoutes = async () => {
  await require('./page')();
  await require('./post')();
  await require('./user')();
};
