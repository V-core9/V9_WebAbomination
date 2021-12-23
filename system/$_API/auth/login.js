const refreshTokens = require('./_ref-tokens');
const vDB = require('v_database');
const v_to_sha256 = require('v_to_sha256');

const jwt  = require('jsonwebtoken');
const jwtConfig = require('./config.jwt');
module.exports = async (req, res) => {
    // read username and password from request body
    const { username, password } = req.body;

    // filter user from the users array by username and password
    const user = await vDB.item.view('users', username);

    if (user) {
        const pass_check = await v_to_sha256(password);
        if (pass_check === user.password) {
            // generate an access token
            const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
            const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);


            res.status(200).json({
                accessToken,
                refreshToken,
                message: 'Login Success',
                code: "LOGIN_SUCCESS"
            });

        } else {
            res.status(401).json({
                message: 'Wrong Password',
                code: "LOGIN_PASS"
            });
        }
        return true;
    } else {
        res.status(401).json({
            message: 'User Not Found',
            code: "LOGIN_USER"
        });
        return false;
    }
};
