const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = post = {

  list: async (req, res) => {
    const data = await prisma.post.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
    return res.status(200).json(data);
  },

  byId: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.findUnique({ where: { id: id } });
    return res.status(200).json(data);
  },

  create: async (req, res) => {
    const data = await prisma.post.create(req.body);
    return res.status(200).json(data);
  },

  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.update({ where: { id: id }, data: req.body });
    return res.status(200).json(data);
  },

  delete: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.delete({ where: { id: id } });
    return res.status(200).json(data);
  },

  purge: async (req, res) => {
    const data = await prisma.post.deleteMany();
    return res.status(200).json(data);
  },

};
