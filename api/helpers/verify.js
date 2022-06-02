const verify = require('v_rifier')();

//? Login Verification
verify.register('login', async (val = {}) =>  (await verify.isEmail(val.email) && await verify.isPassword(val.password, val.password)));

//? Register Verification
verify.register('register', async (val = {}) => (await verify.isUsername(val.username) && await verify.isEmail(val.email) && await verify.isPassword(val.password, val.confirm)));

module.exports = verify;
