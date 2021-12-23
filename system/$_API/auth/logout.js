let refreshTokens = require('./_ref-tokens');

module.exports = async (req, res) => {
    const { token } = req.body;
    if (refreshTokens.indexOf(token) === -1) {
        res.send("You are already logged out.");
    } else {
        refreshTokens = refreshTokens.filter(t => t !== token);
        console.log(refreshTokens);
        res.send("Logout successful");
    }
};
