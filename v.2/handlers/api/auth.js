const statusCodes = require('http').STATUS_CODES;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const v_to_sha256 = require('v_to_sha256');
const v_rifier = require('v_rifier');


module.exports = auth = {

  //! LOGIN
  login: async (req, res) => {
    try {
      var { email, password } = req.body;

      if (((await v_rifier.email(email)) == (await v_rifier.password(password, password)) !== true))
        return res.status(401).json({ message: statusCodes[401] });

      const user = await prisma.user.findUnique({ where: { email: email } });

      const loginResult = ((user !== null) && (await v_to_sha256(password + user.salt) === user.password)) ? { refreshToken: 1234567890, accessToken: 9876543210 } : false;

      return (loginResult !== false) ? res.status(200).json(loginResult) : res.status(401).json({ message: statusCodes[401] });

    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! REFRESH TOKEN
  refreshToken: async (req, res) => {
    try {
      return res.status(200).json({ message: "Refresh token successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //! LOGOUT
  logout: async (req, res) => {
    try {
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

};
