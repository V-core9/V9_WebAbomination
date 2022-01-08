const vDB = require('v_database');
const vRF = require('v_rifier');
const v_to_sha256 = require('v_to_sha256');
const { tables } = require('../../config');
let { refreshTokens } = require('../auth/jwt');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../auth/jwt');
const { register } = require('../data_templates');

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
        
        const response = {
            status: 400,
            msg: "",
            code: "",
            errors: [],
        };
        
        const { username, password } = data;    
        const user = await vDB.item.view(tables.users, username);  

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

    // REGISTER NEW USER
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

            const user = await vDB.item.view(tables.users, username);
            const user_email = await vDB.item.view(tables.emails, email);

            if (user === false && user_email === false) {

                const register_user_status = await vDB.item.new(tables.users, await register.user(username, email, password), username);

                if (register_user_status === true) {
                    const register_email_status = await vDB.item.new(tables.emails, await register.email(username, email), email);
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


