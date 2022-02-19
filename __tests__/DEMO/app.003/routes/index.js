const { router, errors } = require("../../../../modules");

module.exports = async () => {
  await require('./api')();
  await require('./app')();

  router.get('*', [errors['404']]);
  router.post('*', [errors['404']]);
  router.put('*', [errors['404']]);
  router.delete('*', [errors['404']]);
};
