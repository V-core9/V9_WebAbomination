const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const post = {
  all: async () => await prisma.post.findMany({ take: 5 }),
  byId: async (id) => await prisma.post.findUnique({where: {id: id}}),
};

module.exports = post;
