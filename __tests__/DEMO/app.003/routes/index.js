const { router, errors } = require("../../../../modules");

module.exports = async () => {

  await require('./api')();

  await require('./app')();

  await router.get('*', [errors['404']]);
  await router.post('*', [errors['404']]);
  await router.put('*', [errors['404']]);
  await router.delete('*', [errors['404']]);

};
