const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = user = {
  list: async (req, res) => {
    var data = await prisma.user.findMany();
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  byId: async (req, res) => {
    var data = await prisma.user.findUnique({ where: { id: await asy.parseInt(req.params.id) } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  create: async (req, res) => {
    var data = await prisma.user.create({ data: req.body });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  update: async (req, res) => {
    var data = await prisma.user.update({ where: { id: await asy.parseInt(req.params.id), data: req.body } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  delete: async (req, res) => {
    var data = await prisma.user.delete({ where: { id: await asy.parseInt(req.params.id) } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  purge: async (req, res) => {
    var data = await prisma.user.deleteMany();
    return res.status(200).end(await asy.stringifyJSON(data));
  },
};
