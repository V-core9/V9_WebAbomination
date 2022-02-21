module.exports = appRoutes = async () => {
  await require('./statics')();
  await require('./post')();
  await require('./user')();
  await require('./page')();
};
