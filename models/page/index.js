const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const page = {
  all: async () => await prisma.page.findMany({}),
  byId: async (id) => await prisma.page.findUnique({where: {id: id}}),
};

module.exports = page;
