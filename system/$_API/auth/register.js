const refreshTokens = require('./_ref-tokens');
const vDB = require('v_database');
const vRF = require('v_rifier');

const response = {
    status: 400,
    msg: "",
    code: "",
    errors: [],
};

module.exports = async (req, res) => {
    // read username and password from request body
    const { username, email, password, confirmation } = req.body;


    var username_valid = await vRF.username(username);
    var email_valid = await vRF.email(email);
    var pass_valid = await vRF.password(password, confirmation);

    if (username_valid === true && email_valid === true && pass_valid === true) {

        const user = await vDB.item.view('users', username);
        const user_email = await vDB.item.view('user_emails', email);

        if (user === false && user_email === false) {
            response.status= 200;
            response.msg= 'Register Successful';
            response.code= 'REG_SUCCESS';
        } else {

            var err = [];
            if (user !== false) response.errors.username = 'Error';
            if (user_email !== false) response.errors.email = 'Error';

            response.msg = 'Already Exists.';
        }
    } else {
        response.msg = 'Data Validation Failed.';
        response.code = 'REG_FAIL_DATA';
        response.errors = { username: username_valid, email: (email_valid === true) ? 'OK' : email_valid , password: (pass_valid === true) ? 'OK' : pass_valid  };
    }

    res.send(response);
};
