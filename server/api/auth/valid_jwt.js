const path  = require('path');
const jwtConfig = require(path.join(__dirname,'../../config/jwt_config'));
const jwt = require('jsonwebtoken');

const validJWT = (req, res, next) => {
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
        res.sendStatus(401);
    }
};

module.exports = validJWT;
