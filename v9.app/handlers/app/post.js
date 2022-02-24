const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = post = {

  blog: async (req, res) => {
    var data = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  bySlug: async (req, res) => {
    var data = await prisma.post.findFirst({ where : { slug : req.params.slug, published : true } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

};
