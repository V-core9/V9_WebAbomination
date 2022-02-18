const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user = {
  all: async () => await prisma.user.findMany({take: 5}),
  byId: async (id) => await prisma.user.findUnique({where: {id: id}}),
  create: async (data) => await prisma.user.create({data: data}),
  update: async (id, data) => await prisma.user.update({where: {id: id}, data: data}),
  delete: async (id) => await prisma.user.delete({where: {id: id}})
};

module.exports = user;
