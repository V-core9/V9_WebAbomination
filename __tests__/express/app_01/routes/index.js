module.exports = routes = async (app) => {
  await require('./post')(app);
  await require('./page')(app);
};
