const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

purge = async (type) => (await prisma[type].deleteMany({})) ? true : false;
one = async (type, args) => await prisma[type].findUnique({ where: args });
all = async (type) => await prisma[type].findMany({});
mk = async (type, data) => (await prisma[type].create({data: data})) ? true : false;
rm = async (type, id) => (await prisma[type].delete({where: {id: id}})) ? true : false;
up = async (type, id, data) => (await prisma[type].update({where: {id: id}, data: data})) ? true : false;

const page = {
  all: async () => await all('page'),
  byId: async (id) => await one('page', {id: id}),
  create: async (data) => await mk('page', data),
  update: async (id, data) => await up('page', id, data),
  delete: async (id) => await rm('page', id),
  home: async () => await one('page', { slug: '/' }),
  byArgs: async (args) => await one('page', args),
  purge: async () => await purge('page'),
};

module.exports = page;
