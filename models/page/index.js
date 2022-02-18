const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const page = {
  all: async () => await prisma.page.findMany({}),
  byId: async (id) => await prisma.page.findUnique({where: {id: id}}),
  create: async (data) => await prisma.page.create({data: data}),
  update: async (id, data) => await prisma.page.update({where: {id: id}, data: data}),
  delete: async (id) => await prisma.page.delete({where: {id: id}})
};

module.exports = page;
