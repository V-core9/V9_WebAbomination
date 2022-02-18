const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getHomepage: async (req, res) => {
    return res.json(await prisma.page.findUnique({where: {slug : '/'}}));
  },
  getBlog: async (req, res) => {
    return res.json(await prisma.post.findMany({take: 5}));
  },
  getPageBySlug: async (req, res) => {
    return res.json(await prisma.page.findUnique({where: req.params}));
  },
  userList: async (req, res) => {
    return res.json(await prisma.user.findMany({}));
  },
  userById: async (req, res) => {
    return res.json(await prisma.user.findUnique({where: {id : parseInt(req.params.id)}}));
  },
};
