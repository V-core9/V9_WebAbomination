
const { mk_type, list, all, one, mk, up, rm } = require('./data.model');
const { login, logout } = require('./auth');

const vApi = {
    root: require('./root'),
    mk_type, 
    list,
    all,
    one,
    mk,
    up,
    rm,
    login,
    logout
};

module.exports = vApi;
