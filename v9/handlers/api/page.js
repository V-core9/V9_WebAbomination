const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = page = {

  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.findMany()));
  },

  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.findUnique({ where: { id: await asy.parseInt(req.params.id) } })));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.create(req.body)));
  },

  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.update({ where: { id: await asy.parseInt(req.params.id), data: req.body } })));
  },

  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.delete({ where: { id: await asy.parseInt(req.params.id) } })));
  },

  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.page.deleteMany()));
  },

};
