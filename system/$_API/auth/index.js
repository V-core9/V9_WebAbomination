const login = require('./login');
const token = require('./token');
const logout = require('./logout');
const register = require('./register');
const $jwt= require('./$jwt');
const $admin= require('./$admin');

module.exports = {
    register,
    logout,
    login,
    token,
    $admin,
    $jwt
};
