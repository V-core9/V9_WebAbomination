const v_database = require('v_database');
const vDB = require('v_database');
const vRF = require('v_rifier');
const vTables = require('../../config/tables');

const {register} = require('../data_templates');

const userModel = {
    login: async(data) => {

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


