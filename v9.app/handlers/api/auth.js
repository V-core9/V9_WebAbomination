const statusCodes = require('http').STATUS_CODES;

const { saltGenerator } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const v_to_sha256 = require('v_to_sha256');
const v_rifier = require('v_rifier');

module.exports = auth = {

  register: async (req, res) => {
    try {
      var { email, username, password, passwordConfirm } = req.body;
      if ((await v_rifier.email(email)) == (await v_rifier.username(username)) == (await v_rifier.password(password, passwordConfirm)) == true) {
        var salt = await saltGenerator();
        password = await v_to_sha256(password + salt);
        var roleId = (await prisma.role.findUnique({ where: { name: "user" } })).id;
        return res.status(200).json(await prisma.user.create({ data: { email, username, password, salt, roleId } }));
      } else {
        return res.status(401).json({ message: "Data verification failed." });
      }
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    var { email, password } = req.body;
    if ((await v_rifier.email(email)) == (await v_rifier.password(password, password)) == true) {
      const user = await prisma.user.findUnique({ where: { email: email } });
      return ((user !== null) && (await v_to_sha256(req.body.password + user.salt) === user.password)) ?
        res.status(200).json({ message: statusCodes[200], refreshToken: 1234567890, accessToken: 9876543210 }) :
        res.status(401).json({ message: statusCodes[401] });
    } else {
      return res.status(401).json({ message: "Data verification failed." });
    }
  },

};
