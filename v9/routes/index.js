const { errors } = require("../../modules");

module.exports = async (router) => {
  await require('./api')(router);
  await require('./app')(router);

  await router.get('*', [errors['404']]);
  await router.post('*', [errors['404']]);
  await router.put('*', [errors['404']]);
  await router.delete('*', [errors['404']]);

};
