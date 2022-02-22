const { errors } = require("../../modules");

module.exports = async (app) => {

  await require('./api')(app);
  await require('./app')(app);

  await app.get('*', [errors['404']]);
  await app.post('*', [errors['404']]);
  await app.put('*', [errors['404']]);
  await app.delete('*', [errors['404']]);

};
