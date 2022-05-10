const { access } = require('./jwt.config');
const jwt = require('jsonwebtoken');

module.exports = validateAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, access.secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    return res.redirect('/login');
  }
};
