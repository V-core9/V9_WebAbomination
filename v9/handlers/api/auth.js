const { encryptPassword, randomBytesGenerator } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = auth = {

  register: async (req, res) => {
    req.body.salt = await randomBytesGenerator();
    req.body.password = await encryptPassword(req.body.password, req.body.salt);

    try {
      var result = await prisma.user.create({ data: { email: req.body.email, password: req.body.password, username: req.body.username, salt: req.body.salt } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    const userData = await prisma.user.findUnique({ where: { username: req.body.username } });

    if (userData === null) return res.status(401).json({ message: "User not found." });

    const encPass = await encryptPassword(req.body.password, userData.salt);

    if (encPass === userData.password) {
      return res.status(200).json({ message: "User Logged In Successfully.", refreshToken: 1234567890, accessToken: 9876543210 });
    } else {
      return res.status(401).json({ message: "Wrong Credentials." });
    }
  },

};
