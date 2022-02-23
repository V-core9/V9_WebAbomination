const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = post = {

  list: async (req, res) => {
    const data = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });

    return res.status(200).end(await asy.stringifyJSON(data));
  },

  byId: async (req, res) => {
    var { id } = req.params;
    id = await asy.parseInt(id);

    const data = await prisma.post.findUnique({ where: { id: id } });

    return res.status(200).end(await asy.stringifyJSON(data));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.post.create(req.body)));
  },

  update: async (req, res) => {
    var { id } = req.params;
    id = await asy.parseInt(id);

    return res.status(200).end(await asy.stringifyJSON(await prisma.post.update({ where: { id: id }, data: req.body })));
  },

  delete: async (req, res) => {
    var { id } = req.params;
    id = await asy.parseInt(id);

    return res.status(200).end(await asy.stringifyJSON(await prisma.post.delete({ where: { id: id } })));
  },

  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await prisma.post.deleteMany()));
  },

};
