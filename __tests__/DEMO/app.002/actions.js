const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const asy = {
  stringify: async (data) => {
    return JSON.stringify(data, true, 2);
  },
  parseInt: async (data) => {
    return parseInt(data);
  }
};

module.exports = {
  getHomepage: async (req, res) => {
    return res.status(200).send(await asy.stringify(await prisma.page.findUnique({where: {slug : '/'}})));
  },
  getBlog: async (req, res) => {
    return res.status(200).send(await asy.stringify(await prisma.post.findMany({take: 5})));
  },
  getPageBySlug: async (req, res) => {
    return res.status(200).send(await asy.stringify(await prisma.page.findUnique({where: req.params})));
  },
  userList: async (req, res) => {
    return res.status(200).send(await asy.stringify(await prisma.user.findMany({})));
  },
  userById: async (req, res) => {
    return res.status(200).send(await async.stringify(await prisma.user.findUnique({where: {id : await asy.parseInt(req.params.id)}})));
  },
};
