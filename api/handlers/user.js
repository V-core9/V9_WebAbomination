const statusCodes = require('http').STATUS_CODES;

const { saltGenerator, asy } = require('../helpers');

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


  /*
  * Listing Users
  */
  list: async (req, res) => {
    try {
      var data = await prisma.user.findMany({ take: 10, orderBy: { id: 'desc' }, select: { id: true, username: true, email: true, role: true } });
      return res.status(200).end(await asy.stringify(data));
    } catch (error) {
      return res.status(400).end(await asy.stringify(error));
    }
  },


  /*
  * Get User By ID
  */
  byId: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      var data = await prisma.user.findUnique({ where: { id: id } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Register/Create New User
  */
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


  /*
  * Update User Data
  */
  update: async (req, res) => {
    try {
      var data = await prisma.user.update({ where: { id: parseInt(req.params.id), data: req.body } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Delete/Remove a user 
  ! [NOTE: This should "Archive" User info for later]
  */
  delete: async (req, res) => {
    try {
      var data = await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Purge Table: Users
  */
  purge: async (req, res) => {
    try {
      var data = await prisma.user.deleteMany();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Change User Password
  */
  changePassword: async (req, res) => {
    try {
      return res.status(200).json({ message: "Change password successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Role Change
  */
  changeRole: async (req, res) => {
    try {
      return res.status(200).json({ message: "Change role successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },


};
