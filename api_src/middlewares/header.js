const config = require('../config');

module.exports = async (req, res, next) => {
    res.setHeader("Content-Security-Policy", config.ContentSecurityPolicy);
    res.setHeader('Strict-Transport-Security', config.StrictTransportSecurity);
    res.setHeader("Access-Control-Allow-Origin", config.AccessControlAllowOrigin);
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
};
