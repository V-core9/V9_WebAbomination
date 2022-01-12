const jwtConfig = require('./config');
const jwt = require('jsonwebtoken');

const vWebsite = require('../../../v_website');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, jwtConfig.secret.access, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        req.errorCode = 401;
        vWebsite.errorPage(req, res);
        //res.sendStatus(401);
    }
};
