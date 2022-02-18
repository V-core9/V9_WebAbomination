const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = class Base {
  constructor(name) {
    this.type = name;
    this.all = async () => await prisma[this.type].findMany({});
    this.byId = async (id) => await prisma[this.type].findUnique(this.type, { id: id });
    this.create = async (data) => (await prisma[this.type].create({ data: data })) ? true : false;
    this.update = async (id, data) => (await prisma[this.type].update({ where: { id: id }, data: data })) ? true : false;
    this.delete = async (id) => (await prisma[this.type].delete({ where: { id: id } })) ? true : false;
    this.byArgs = async (args) => await prisma[this.type].findUnique({ where: args });
    this.purge = async () => (await prisma[this.type].deleteMany({})) ? true : false;
  }
};