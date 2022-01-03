
const userModel = require('../models/user');

module.exports = async (req, res) => {
    const response = await userModel.logout(req.body);
    res.status(response.status).json(response);
};
