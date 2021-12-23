const login = require('./login');
const logout = require('./logout');
const register = require('./register');
const $jwt= require('./$jwt');
const $admin= require('./$admin');

module.exports = {
    register,
    logout,
    login,
    $admin,
    $jwt
};
