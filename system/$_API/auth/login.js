const refreshTokens = require('./_ref-tokens');
const vDB = require('v_database');

module.exports = async (req, res) => {
    // read username and password from request body
    const { username, password } = req.body;

    // filter user from the users array by username and password
    const user = await vDB.item.view('users', username);

    console.log(username, password);
    console.log(user);

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken
        });
    } else {
        res.send('Username or password incorrect');
    }
    res.send('Username or password incorrect');
};
