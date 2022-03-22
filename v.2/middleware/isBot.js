const isBot = require('isbot');

module.exports = async (req, res, next) => {
  req.isBot = isBot(req.get('user-agent'));
  next();
};
