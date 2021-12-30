const v_database = require('v_database');
const vDB = require('v_database');
const vRF = require('v_rifier');
const vTables = require('../../config/tables');
const refreshTokens = require('../auth/_ref-tokens');
const v_to_sha256 = require('v_to_sha256');


const jwt = require('jsonwebtoken');
const jwtConfig = require('../auth/config.jwt');

const {register} = require('../data_templates');

const userModel = {
    login: async (data) => {

        const response = {
            status: 400,
            msg: "",
            code: "",
            errors: [],
        };
        // read username and password from request body
        const { username, password } = data;
    
        // filter user from the users array by username and password
        const user = await vDB.item.view(vTables.users, username);
    
        if (user) {
            const pass_check = await v_to_sha256(password);
            if (pass_check === user.password) {
                // generate an access token
                const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
                const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);
    
                refreshTokens.push(refreshToken);

                response.status = 200;
                response.msg = "Login Success";
                response.code = "LOGIN_SUCCESS";
                response.accessToken = accessToken;
                response.refreshToken = refreshToken;
    
            } else {
                response.status = 401;
                response.msg = "Wrong Password";
                response.code = "LOGIN_PASS";
            }
        } else {
            response.status = 401;
            response.msg = "User Not Found";
            response.code = "LOGIN_USER";
        }
        return response;
    },
    register: async (data) => {

        const response = {
            status: 400,
            msg: "",
            code: "",
            errors: [],
        };
        // read username and password from request body
        const { username, email, password, confirmation } = data;


        var username_valid = await vRF.username(username);
        var email_valid = await vRF.email(email);
        var pass_valid = await vRF.password(password, confirmation);

        if (username_valid === true && email_valid === true && pass_valid === true) {

            const user = await vDB.item.view(vTables.users, username);
            const user_email = await vDB.item.view(vTables.emails, email);

            if (user === false && user_email === false) {

                const register_user_status = await vDB.item.new(vTables.users, await register.user(username, email, password), username);

                if (register_user_status === true) {
                    const register_email_status = await vDB.item.new(vTables.emails, await register.email(username, email), email);
                    if (register_email_status === true) {
                        response.status = 200;
                        response.msg = "User registered successfully";
                        response.code = "REGISTER_SUCCESS";
                    } else {
                        response.status = 400;
                        response.msg = "User registered but email not registered";
                        response.code = "REGISTER_EMAIL_FAIL";
                    }
                } else {
                    response.status = 400;
                    response.msg = "User not registered";
                    response.code = "REGISTER_FAIL";
                }

            } else {

                var err = [];
                if (user !== false) response.errors.push('username');
                if (user_email !== false) response.errors.push('email');

                response.msg = 'Already Exists.';
            }
        } else {
            response.msg = 'Data Validation Failed.';
            response.code = 'REG_FAIL_DATA';
            response.errors = { username: username_valid, email: (email_valid === true) ? 'OK' : email_valid, password: (pass_valid === true) ? 'OK' : pass_valid };
        }

        return response;
    },

    all: async () => {
        return await v_database.type.view(vTables.users);
    },

    one: async (options) => {
        return await v_database.item.view(vTables.users, options);
    }

};

module.exports = userModel;


