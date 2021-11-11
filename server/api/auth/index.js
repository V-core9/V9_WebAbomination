const authValidator = {
  jwt : require('./valid_jwt'),
  admin: require('./valid_admin')
};

module.exports = authValidator;
