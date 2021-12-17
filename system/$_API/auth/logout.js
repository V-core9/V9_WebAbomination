let refreshTokens = require('./_ref-tokens');

module.exports = async (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(t => t !== token);

    res.send("Logout successful");
};
