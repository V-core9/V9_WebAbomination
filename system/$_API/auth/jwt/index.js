const jwt = {
    verify_admin:  require('./verify.admin'),
    verify_jwt:  require('./verify.jwt'),
    refreshTokens:  require('./ref_tokens'),
    jwtConfig:  require('./config'),
    refreshAccessToken:  require('./refresh_access_token'),
};

module.exports = jwt;
