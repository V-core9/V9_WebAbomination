const { asy } = require('../../../helpers');
const models = require('../../../models');

//! Prisma Client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//* Just some functions that use prisma.
//* Still just testing of random things.
module.exports = {
  getHomepage: async (req, res) => res.status(200).send(await asy.stringifyJSON(await models.page.home())),
  getPageBySlug: async (req, res) => res.status(200).end(await asy.stringifyJSON(await models.page.byArgs(req.params))),
  listPages: async (req, res) => res.status(200).end(await asy.stringifyJSON(await models.page.all())),

  getBlog: async (req, res) => res.status(200).end(await asy.stringifyJSON(await models.post.all())),

  userList: async (req, res) => res.status(200).end(await asy.stringifyJSON(await models.user.all())),
  userById: async (req, res) => res.status(200).end(await asy.stringifyJSON(await models.user.byId(await asy.parseInt(req.params.id)))),
};
