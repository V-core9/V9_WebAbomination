const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { User } = require('../../../../../models');

const userModel = new User();

userBySlug = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await userModel.bySlug(req.params.slug)));
};


module.exports = async () => {
  router.get('/user/:slug', [userBySlug]);
};
