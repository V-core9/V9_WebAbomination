const { saltGenerator } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const v_to_sha256 = require('v_to_sha256');

module.exports = auth = {

  register: async (req, res) => {
    req.body.salt = await saltGenerator();
    req.body.password = await v_to_sha256(req.body.password + req.body.salt);
    try {
      return res.status(200).json(await prisma.user.create({ data: req.body }));
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    const user = await prisma.user.findUnique({ where: { username: req.body.username } });

    if (user === null) return res.status(401).json({ message: "Login failed, user does not exist." });

    if (await v_to_sha256(req.body.password + user.salt) === user.password) {
      return res.status(200).json({ message: "Successful login.", refreshToken: 1234567890, accessToken: 9876543210 });
    } else {
      return res.status(401).json({ message: "Login failed, wrong password." });
    }
  },

};
