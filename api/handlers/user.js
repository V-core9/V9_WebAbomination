const statusCodes = require('http').STATUS_CODES;

const { saltGenerator } = require('../helpers');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//!------------------------
//? USER - Handlers
//* 1. list
//* 2. byId
//* 3. create
//* 4. update
//* 5. delete
//* 6. purge
//* 7. changePassword
//* 8. changeRole
//!------------------------

module.exports = user = {

  //! Simple listing of users
  list: async (req, res) => {
    try {
      var data = await prisma.user.findMany({ take: 10, orderBy: { id: 'desc' } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  //! Find user by id
  byId: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      var data = await prisma.user.findUnique({ where: { id: id } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  //! NEW USER REGISTER
  create: async (req, res) => {
    try {
      var { email, username, password, passwordConfirm } = req.body;

      if (await v_rifier.email(email) == await v_rifier.username(username) == await v_rifier.password(password, passwordConfirm) !== true)
        return res.status(401).json({ message: statusCodes[401] });

      const salt = await saltGenerator();
      password = await v_to_sha256(password + salt);
      var roleId = (await prisma.role.findUnique({ where: { name: "User" } })).id;

      const data = { email, username, password, salt, roleId };
      return res.status(200).json(await prisma.user.create({ data }));

    } catch (error) {
      return res.status(400).json(error);
    }
  },


  //! Update user
  update: async (req, res) => {
    try {
      var data = await prisma.user.update({ where: { id: parseInt(req.params.id), data: req.body } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  //! Delete User
  delete: async (req, res) => {
    try {
      var data = await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
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
