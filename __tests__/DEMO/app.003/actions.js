const { asy } = require('../../../helpers');
const {Page, Post, User} = require('../../../models');

const pageModel = new Page();
const postModel = new Post();
const userModel = new User();

//* Just some functions that use prisma.
//* Still just testing of random things.
module.exports = {
  homepage: async (req, res) => res.status(200).send(await asy.stringifyJSON(await pageModel.home())),
  pageBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.byArgs(req.params))),
  pages: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.all())),

  blog: async (req, res) => res.status(200).end(await asy.stringifyJSON(await postModel.all())),

  users: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.all())),
  userById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id)))),
};
