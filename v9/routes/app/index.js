module.exports = appRoutes = async (router) => {

  await require('./statics')(router);

  await require('./post')(router);
  await require('./user')(router);
  await require('./page')(router);

};
