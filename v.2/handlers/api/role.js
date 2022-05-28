const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = role = {
  list: async (req, res) => {
    var data = await prisma.role.findMany({ take: 10, orderBy: { id: 'desc' } });
    return res.status(200).json(data);
  },

  byId: async (req, res) => {
    return res.status(200).json(await prisma.role.findUnique({ where: { id: parseInt(req.params.id) } }));
  },

  create: async (req, res) => {
    return res.status(200).json(await prisma.role.create({ data: req.body }));
  },

  update: async (req, res) => {
    return res.status(200).json(await prisma.role.update({ where: { id: parseInt(req.params.id), data: req.body } }));
  },

  delete: async (req, res) => {
    return res.status(200).json(await prisma.role.delete({ where: { id: parseInt(req.params.id) } }));
  },

  purge: async (req, res) => {
    return res.status(200).json(await prisma.role.deleteMany());
  },
};
