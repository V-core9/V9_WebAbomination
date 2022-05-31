const { log } = require('./v_log');

const verify = require('v_rifier')();

//? Login Verification
verify.register('login', async (val = {}) => {
  let email = val.email || '';
  let password = val.password || '';
  return (await verify.isEmail(email) && await verify.isPassword(password, password));
});

//? Register Verification
verify.register('register', async (val = {}) => {
  let username = val.username || '';
  let email = val.email || '';
  let password = val.password || '';
  let passwordConfirm = val.passwordConfirm || '';
  return (await verify.isUsername(username) && await verify.isEmail(email) && await verify.isPassword(password, passwordConfirm));
});

(async () => {
  log(await verify.listTypes());
})();

module.exports = verify;
