const { asy } = require('../../../helpers');
const models = require('../../../models');

const pageModel = new models.Page();
const postModel = new models.Page();
const userModel = new models.Page();


//* Just some functions that use prisma.
//* Still just testing of random things.
module.exports = {
  getHomepage: async (req, res) => res.status(200).send(await asy.stringifyJSON(await pageModel.home())),
  getPageBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.byArgs(req.params))),
  listPages: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.all())),

  getBlog: async (req, res) => res.status(200).end(await asy.stringifyJSON(await postModel.all())),

  userList: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.all())),
  userById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id)))),
};
