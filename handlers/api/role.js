const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = role = {
  list: async (req, res) => {
    var data = await prisma.role.findMany({ take: 10, orderBy: { id: 'desc' } });
    return res.status(200).json(data);
  },

  byId: async (req, res) => {
    const id = await asy.parseInt(req.params.id);
    var data = await prisma.role.findUnique({ where: { id: id } });
    return res.status(200).json(data);
  },

  create: async (req, res) => {
    var data = await prisma.role.create({ data: req.body });
    return res.status(200).json(data);
  },

  update: async (req, res) => {
    var data = await prisma.role.update({ where: { id: await asy.parseInt(req.params.id), data: req.body } });
    return res.status(200).json(data);
  },

  delete: async (req, res) => {
    var data = await prisma.role.delete({ where: { id: await asy.parseInt(req.params.id) } });
    return res.status(200).json(data);
  },

  purge: async (req, res) => {
    var data = await prisma.role.deleteMany();
    return res.status(200).json(data);
  },
};
