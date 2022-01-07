
const {userModel} = require('../models');


module.exports = {
    logout: async (req, res) => {
        const response = await userModel.logout(req.body);
        res.status(response.status).json(response);
    },

    register: async (req, res) => {
        const response = await userModel.register(req.body);
        res.status(response.status).json(response);
    },

    login: async (req, res) => {
        const response = await userModel.login(req.body);
        res.status(response.status).json(response);
    },

    jwt: require('./jwt'),
};