const config = require('../config');

module.exports = async (req, res, next) => {
    res.setHeader("Content-Security-Policy", config.ContentSecurityPolicy);
    next();
};
