const config = require('../config');

module.exports = async (req, res, next) => {
    res.set('X-Powered-By', config.info.name+'.'+config.info.version+'.'+config.info.codename);
    next();
};

