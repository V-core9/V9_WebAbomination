const geoip = require('geoip-lite');

module.exports = async (req, res, next) => {
    req.geoip = geoip.lookup(req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    next();
};
