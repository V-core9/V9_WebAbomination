const { asy } = require('../../../../helpers');
const { User } = require('../../../../models');

const userModel = new User();

//* Just some functions that use prisma.
//* Still just testing of random things.
module.exports = {
  users: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.all())),
  userById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id)))),
  userBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.bySlug(req.params.slug))),
};
