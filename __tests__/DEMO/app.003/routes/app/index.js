module.exports = appRoutes = async () => {
  await require('./post')();
  await require('./page')();
};
