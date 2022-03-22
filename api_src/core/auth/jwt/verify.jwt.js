const jwtConfig = require('./config');
const jwt = require('jsonwebtoken');

const vWebsite = require('../../../v_website');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, jwtConfig.secret.access, (err, user) => {
            if (err) {
                //return res.sendStatus(403);
                req.errorCode = 403;
                vWebsite.errorPage(req, res);
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
