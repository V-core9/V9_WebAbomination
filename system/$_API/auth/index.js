const login = require('./login');
const logout = require('./logout');
const $jwt= require('./$jwt');
const $admin= require('./$admin');

module.exports = {
    logout,
    login,
    $admin,
    $jwt
};
