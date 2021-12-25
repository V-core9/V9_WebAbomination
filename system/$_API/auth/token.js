const jwt = require('jsonwebtoken');
const jwtConfig = require('./config.jwt');
const refreshTokens = require('./_ref-tokens');

module.exports = async (req, res) => {
    // read username and password from request body
    const { token } = req.body;
    if (refreshTokens.indexOf(token) !== -1) {
        jwt.verify(token, jwtConfig.secret.refresh, (err, user) => {
            if (err) {
                return res.status(403).json({
                    message: 'Access Token Refresh Error',
                    code: "TOKEN_VERIFICATION_FAILED"
                });
            }

            res.status(200).json({
                accessToken : jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires }),
                message: 'Access Token Refresh Success',
                code: "TOKEN_SUCCESS"
            });
        });

    } else {
        res.status(401).json({
            message: 'Access Token Refresh Failed',
            code: "TOKEN_BAD_UNKNOWN"
        });
    }
};
