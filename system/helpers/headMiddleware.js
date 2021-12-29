const config = require('../config');

module.exports = async (req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' ; connect-src https://cloudflareinsights.com/cdn-cgi/rum  https://www.google-analytics.com/* ; script-src 'self' 'unsafe-inline' *.googletagmanager.com  ");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader('X-Powered-By', config.info.name + '.' + config.info.version + '.' + config.info.codename);
    next();
};
