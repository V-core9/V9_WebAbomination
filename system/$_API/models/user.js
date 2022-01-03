const vDB = require('v_database');
const vRF = require('v_rifier');
const v_to_sha256 = require('v_to_sha256');
const { tables } = require('../../config');
let refreshTokens = require('../auth/_ref-tokens');

const jwt = require('jsonwebtoken');

const jwtConfig = require('../auth/config.jwt');

const { register } = require('../data_templates');


api_resp = async (res, rez) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rez, true, 2));
};


const userModel = {

    // LOGIN
    logout: async (req, res) => {
        const { token } = req.body;
        if (refreshTokens.indexOf(token) === -1) {
            res.send("You are already logged out.");
        } else {
            refreshTokens = refreshTokens.filter(t => t !== token);
            console.log(refreshTokens);
            res.send("Logout successful");
        }
    },

    // LOGIN
    login: async (data) => {

        const { username, password } = data;
        const user = await vDB.item.view(tables.users, username);

        if (user) {
            const pass_check = await v_to_sha256(password);
            if (pass_check === user.password) {
                // generate an access token
                const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
                const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);

                refreshTokens.push(refreshToken);
                api_resp(res, { status: 200, msg: 'Login successful', accessToken, refreshToken });
            } else {
                api_resp(res, { status: 401, msg: 'Wrong Password' });
            }
        } else {
            api_resp(res, { status: 401, msg: 'User Not Found' });
        }
    },

    // REGISTER NEW USER
    register: async (data) => {

        var errors = [];
        const { username, email, password, confirmation } = data;

        var username_valid = await vRF.username(username);
        var email_valid = await vRF.email(email);
        var pass_valid = await vRF.password(password, confirmation);

        if (username_valid === true && email_valid === true && pass_valid === true) {

            const user = await vDB.item.view(tables.users, username);
            const user_email = await vDB.item.view(tables.emails, email);

            if (user === false && user_email === false) {

                const register_user_status = await vDB.item.new(tables.users, await register.user(username, email, password), username);

                if (register_user_status === true) {
                    const register_email_status = await vDB.item.new(tables.emails, await register.email(username, email), email);
                    if (register_email_status === true) {
                        api_resp(res, { status: 200, msg: 'REGISTER_SUCCESS' });
                    } else {
                        api_resp(res, { status: 400, msg: 'REGISTER_EMAIL_FAIL_TO_SAVE' });
                    }
                } else {
                    api_resp(res, { status: 400, msg: 'REGISTER_FAIL_TO_SAVE' });
                }
            } else {

                if (user !== false) errors.push('username');
                if (user_email !== false) errors.push('email');

                api_resp(res, { status: 401, msg: 'REG_FAIL_EXISTS', errors });
            }
        } else {
            errors = { username: username_valid, email: (email_valid === true) ? 'OK' : email_valid, password: (pass_valid === true) ? 'OK' : pass_valid };
            api_resp(res, { status: 405, msg: 'REG_FAIL_DATA', errors });
        }
    },

    // LIST ALL USERS
    all: async () => {
        return await vDB.type.view(tables.users);
    },

    // Return Single User
    one: async (id) => {
        return (id !== undefined) ? await vDB.item.view(tables.users, id) : false;
    }

};

module.exports = userModel;


