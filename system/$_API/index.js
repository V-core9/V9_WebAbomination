
const { mk_type, list, all, one, mk, up, rm } = require('./data.model');
const { login, logout, register, $jwt } = require('./auth');
const { api_root, api_v1 } = require('./config');

const vApi = {
    api_root,
    api_v1,
    root: require('./root'),
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
    $jwt
};

module.exports = vApi;
