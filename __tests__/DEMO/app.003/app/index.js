const { asy } = require('../../../../helpers');
const {Page, Post, User} = require('../../../../models');

const pageModel = new Page();
const postModel = new Post();
const userModel = new User();

//* Just some functions that use prisma.
//* Still just testing of random things.
module.exports = {
  homepage: async (req, res) => res.status(200).send(await asy.stringifyJSON(await pageModel.home())),

  pages: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.all())),
  pageById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.byId(await asy.parseInt(req.params.id)))),
  pageBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await pageModel.bySlug(req.params.slug))),


  blog: async (req, res) => res.status(200).end(await asy.stringifyJSON(await postModel.all())),
  postById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await postModel.byId(await asy.parseInt(req.params.id)))),
  postBySlug:  async (req, res) => res.status(200).end(await asy.stringifyJSON(await postModel.byArgs(req.params))),

  users: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.all())),
  userById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id)))),
  userBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await userModel.bySlug(req.params.slug))),

};
