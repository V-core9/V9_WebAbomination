const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { User } = require('../../../../../models');

const userModel = new User();

userList = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await userModel.all()));
};

userById = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id))));
};


module.exports = async () => {
  router.get('/api/user/', [userList]);
  router.get('/api/user/:id', [userById]);
};
