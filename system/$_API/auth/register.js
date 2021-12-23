const refreshTokens = require('./_ref-tokens');
const vDB = require('v_database');
const vRF = require('v_rifier');
const v_to_sha256 = require('v_to_sha256');


const data_template = {
    register_user: async (username, email, password) => {
        return {
            username: username,
            email: email,
            password: await v_to_sha256(password),
            created_at: new Date(),
            updated_at: new Date(),
            role: 'user',
            status: 'active',
            verified: false
        };
    },
    register_email: async (username, email) => {
        return {
            owner: username,
            email: email,
            created_at: new Date(),
            updated_at: new Date(),
            status: 'active',
            verified: false
        };
    }
};

module.exports = async (req, res) => {

    const response = {
        status: 400,
        msg: "",
        code: "",
        errors: [],
    };
    // read username and password from request body
    const { username, email, password, confirmation } = req.body;


    var username_valid = await vRF.username(username);
    var email_valid = await vRF.email(email);
    var pass_valid = await vRF.password(password, confirmation);

    if (username_valid === true && email_valid === true && pass_valid === true) {

        const user = await vDB.item.view('users', username);
        const user_email = await vDB.item.view('user_emails', email);

        if (user === false && user_email === false) {

            const register_user_status = await vDB.item.new('users', await data_template.register_user(username, email, password), username);

            if (register_user_status === true) {
                const register_email_status = await vDB.item.new('user_emails', await data_template.register_email(username, email), email);
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

    res.status(response.status).json({
        message: response.msg,
        code: response.code,
        errors: response.errors,
    });
};
