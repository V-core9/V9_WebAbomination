
const { mk_type, rm_type, list, all, one, mk, up, rm } = require('./data.model');
const { login, logout, register, $jwt, $admin, token } = require('./auth');
const { api_root, api_v1 } = require('./config');

const vApi = {
    api_root,
    api_v1,
    root: require('./root'),
    rm_type,
    mk_type, 
    list,
    all,
    one,
    mk,
    up,
    rm,
    login,
    logout,
    register,
    $jwt,
    $admin,
    token
};

module.exports = vApi;
