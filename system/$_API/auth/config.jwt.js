const jwtConfig = {
    secret: {
        access: "tokenSecret.access123456",
        refresh: "tokenSecret.refresh1234567890"
    },
    expires: "5m"
};

module.exports = jwtConfig;
