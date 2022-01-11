module.exports = async (req, res, next) => {
    if (req.cookies.accessToken !== undefined) req.headers.authorization = "vCoreToken "+req.cookies.accessToken;
    next();
};
