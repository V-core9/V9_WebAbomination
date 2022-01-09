module.exports = async (req, res, next) => {
    req.headers.authorization = "vCoreToken "+req.cookies.accessToken;
    next();
};
