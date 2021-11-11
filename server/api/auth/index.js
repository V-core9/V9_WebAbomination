const authValid = {
  jwt : require('./validate_jwt'),
  admin: require('./validate_admin')
};

module.exports = authValid;
