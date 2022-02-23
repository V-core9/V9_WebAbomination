const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = page = {

  list: async (req, res) => {
    const data = await prisma.page.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
    return res.status(200).json(data);
  },

  byId: async (req, res) => {
    const id = await asy.parseInt(req.params.id);
    const data = await prisma.page.findUnique({ where: { id: id } });
    return res.status(200).json(data);
  },

  create: async (req, res) => {
    const data = await prisma.page.create(req.body);
    return res.status(200).json(data);
  },

  update: async (req, res) => {
    const id = await asy.parseInt(req.params.id);
    const data = await prisma.page.update({ where: { id: id }, data: req.body });
    return res.status(200).json(data);
  },

  delete: async (req, res) => {
    const id = await asy.parseInt(req.params.id);
    const data = await prisma.page.delete({ where: { id: id } });
    return res.status(200).json(data);
  },

  purge: async (req, res) => {
    const data = await prisma.page.deleteMany();
    return res.status(200).json(data);
  },

};
