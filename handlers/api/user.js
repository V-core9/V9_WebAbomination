const { asy } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = user = {
  list: async (req, res) => {
    try {
      var data = await prisma.user.findMany({ take: 10, orderBy: { id: 'desc' } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  byId: async (req, res) => {
    try {
      const id = await asy.parseInt(req.params.id);
      var data = await prisma.user.findUnique({ where: { id: id } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! Create single user
  create: async (req, res) => {
    try {
      var data = await prisma.user.create({ data: req.body });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! Update user
  update: async (req, res) => {
    try {
      var data = await prisma.user.update({ where: { id: await asy.parseInt(req.params.id), data: req.body } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! Delete User
  delete: async (req, res) => {
    try {
      var data = await prisma.user.delete({ where: { id: await asy.parseInt(req.params.id) } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! DELETE ALL DATA
  purge: async (req, res) => {
    try {
      var data = await prisma.user.deleteMany();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  //! CHANGE PASSWORD
  changePassword: async (req, res) => {
    try {
      return res.status(200).json({ message: "Change password successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! CHANGE ROLE
  changeRole: async (req, res) => {
    try {
      return res.status(200).json({ message: "Change role successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
