const userModel = require('../models/user');

module.exports = async (req, res) => {
    const response = await userModel.register(req.body);
    res.status(response.status).json(response);
};
