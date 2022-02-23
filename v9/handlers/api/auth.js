const { encryptPassword, randomBytesGenerator } = require('../../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = auth = {

  register: async (req, res) => {
    req.body.salt = await randomBytesGenerator();
    req.body.password = await encryptPassword(req.body.password, req.body.salt);

    var createResp = await prisma.user.create({ data: { email: req.body.email, password: req.body.password, username: req.body.username, salt: req.body.salt } });

    return (createResp !== null) ? res.status(401).json({ message: "Failed to register new user." }) : res.status(200).json(createResp);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const data = await user.login(username, password);

    const userData = await prisma.user.findUnique({ where: { username: username } });

    if (encryptPassword(password, userData.salt) === userData.password) {
      return true;
    } else {
      return false;
    }


    return (!data) ? res.status(401).json({ message: "User not found" }) : res.status(200).json(data);
  },

};
