const jwtConfig = {
  secret: {
    access : "tokenSecret.access123456",
    refresh: "tokenSecret.refresh1234567890"
  },
  expires : "20m"
};

module.exports = jwtConfig;
