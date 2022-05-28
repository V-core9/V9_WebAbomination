const statusCodes = require('http').STATUS_CODES;
const v_to_sha256 = require('v_to_sha256');

const { saltGenerator, verify } = require('../helpers');

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
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Get User By ID
  */
  byId: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      var data = await prisma.user.findUnique({ where: { id: id }, select: { id: true, username: true, email: true, role: true } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Get Currently Logged In User Data
  */
  getMe: async (req, res) => {
    try {
      var data = await prisma.user.findUnique({ where: { username: req.user.username }, select: { id: true, username: true, email: true, role: true } });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  byUsername: async (req, res) => {
    try {
      const username = req.params.username;
      var data = await prisma.user.findUnique({ where: { username: username }, select: { id: true, username: true, email: true, role: true } });
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

      if (await verify.isEmail(email) == await verify.isUsername(username) == await verify.isPassword(password, passwordConfirm) !== true) return res.status(401).json({ message: statusCodes[401] });

      const salt = await saltGenerator();

      password = await v_to_sha256(password + salt);

      const data = { email, username, password, salt, role: "USER" };

      return res.status(200).json({ message: await prisma.user.create({ data: data }) });

    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Update User Data [admin]
  */
  update: async (req, res) => {
    try {
      var { username, email, password, passwordConfirmation, role } = req.body;

      id = parseInt(req.params.id);
      console.log(id);
      const data = {};
      if (await verify.isEmail(email) == true) data.email = email;

      if (await verify.isUsername(username) == true) data.username = username;

      if (await verify.isPassword(password, passwordConfirmation) == true) {
        data.salt = await saltGenerator();
        data.password = await v_to_sha256(password + data.salt);
      }

      if (role !== undefined) data.role = role;
      console.log(data);

      var results = await prisma.user.update({ where: { id }, data });
      console.log(results);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Update Logged In User Data
  */
  updateMe: async (req, res) => {
    try {
      var { username, email, password, passwordConfirmation, role } = req.body;

      const data = {};
      if (await verify.isEmail(email) == true) data.email = email;

      if (await verify.isUsername(username) == true) data.username = username;

      if (await verify.isPassword(password, passwordConfirmation) == true) {
        data.salt = await saltGenerator();
        data.password = await v_to_sha256(password + data.salt);
      }

      if (role !== undefined) data.role = role;
      console.log(data);

      var results = await prisma.user.update({ where: { username: res.user.username }, data });
      console.log(results);
      return res.status(200).json(results);
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

  deleteMe: async (req, res) => {
    try {
      var data = await prisma.user.delete({ where: { username: res.user.username } });
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
