const statusCodes = require('http').STATUS_CODES;

const { jwtCfg } = require('../config');
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const v_to_sha256 = require('v_to_sha256');
const { isEmail, isPassword}  = require('../helpers/verify');
const { log, info } = require('../helpers/v_log');


//!------------------------
//? AUTH - Handlers
//* 1. login
//* 2. refreshToken
//* 3. logout
//!------------------------

module.exports = auth = {


  /*
  * Login Handler
  */
  login: async (req, res) => {
    try {
      var { email, password } = req.body;

      await info('Login Attempt: ' + email + ' - ' + password);

      if (!isEmail(email) || !isPassword(password, password)) return res.status(401).json({ message: statusCodes[401] });

      const user = await prisma.user.findUnique({ where: { email: email } });

      if ((user !== null) && (await v_to_sha256(password + user.salt) === user.password)) {
        const tokenData = { username: user.username, role: user.role };

        const accessToken = jwt.sign(tokenData, jwtCfg.access.secret, { expiresIn: jwtCfg.access.expires });
        const refreshToken = jwt.sign(tokenData, jwtCfg.refresh.secret);
        try {
          await prisma.jwtRefreshToken.deleteMany({ where: { userId: user.id } });
        } catch (error) {
          console.log(error);
        }
        await prisma.jwtRefreshToken.create({ data: { token: refreshToken, userId: user.id } });

        return res.status(200).json({ refreshToken: refreshToken, accessToken: accessToken });
      }
      return res.status(401).json({ message: statusCodes[401] });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },


  /*
  * Refresh Access Token
  */
  refreshToken: async (req, res) => {
    try {
      const { token } = req.body;

      var status = await prisma.jwtRefreshToken.findUnique({ where: { token: token } });
      await info('refreshToken: ' + status);

      if (status !== null) {
        jwt.verify(token, jwtCfg.refresh.secret, (err, user) => {
          if (err) {
            return res.status(403).json({ message: statusCodes[403] });
          }

          return res.status(200).json({ accessToken: jwt.sign({ username: user.username, role: user.role }, jwtCfg.access.secret, { expiresIn: jwtCfg.access.expires }) });
        });
      } else {
        return res.status(401).json({ message: statusCodes[401] });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Logout Handler
  */
  logout: async (req, res) => {
    try {
      await info('logout: ' + req.body.token);
      return res.status(200).json(await prisma.jwtRefreshToken.delete({ where: { token: req.body.token } }));
    } catch (error) {
      return res.status(400).json(error);
    }
  },


};
