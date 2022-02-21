const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { User } = require('../../../../../models');

userByUsername = async (req, res) => {
  var userModel = new User();
  return res.status(200).end(await asy.stringifyJSON(await userModel.byUsername(req.params.slug)));
};

module.exports = async () => {
  router.get('/user/:slug', [userByUsername]);
};
