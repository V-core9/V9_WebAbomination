module.exports = appRoutes = async (app) => {

  await require('./statics')(app);

  await require('./post')(app);
  await require('./user')(app);
  await require('./page')(app);

};
