const { asy } = require('../../helpers');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = user = {

  byUsername: async (req, res) => {
    var data = await prisma.user.findUnique({ where: { username: req.params.username } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

};
