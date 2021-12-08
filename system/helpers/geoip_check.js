const geoip = require('geoip-lite');

module.exports = async (ip) => {
    return geoip.lookup(ip);
};
