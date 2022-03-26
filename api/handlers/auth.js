const statusCodes = require('http').STATUS_CODES;

const { jwtConfig } = require('../config');
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const v_to_sha256 = require('v_to_sha256');
const v_rifier = require('v_rifier');


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

      if (((await v_rifier.email(email)) == (await v_rifier.password(password, password)) !== true)) return res.status(401).json({ message: statusCodes[401] });

      const user = await prisma.user.findUnique({ where: { email: email } });

      if ((user !== null) && (await v_to_sha256(password + user.salt) === user.password)) {
        const role = await prisma.role.findUnique({ where: { id: user.roleId } });

        const accessToken = await jwt.sign({ username: user.username, role: role.name }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
        const refreshToken = await jwt.sign({ username: user.username, role: role.name }, jwtConfig.secret.refresh);

        await prisma.jwtRefreshToken.create({ data: { token: refreshToken, userId: user.id } });

        return res.status(200).json({ refreshToken: refreshToken, accessToken: accessToken });
      }
      return res.status(401).json({ message: statusCodes[401] });
    } catch (error) {
      return res.status(400).json(error);
    }
  },


  /*
  * Refresh Access Token
  */
  refreshToken: async (req, res) => {
    try {
      const { token } = req.body;

      var status = await prisma.jwtRefreshToken.findUnique({ where: { token: token } });

      if (status !== null) {
        jwt.verify(token, jwtConfig.secret.refresh, (err, user) => {
          if (err) {
            return res.status(403).json({ message: statusCodes[403] });
          }

          res.status(200).json({ accessToken: jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires }) });
        });
      }
      res.status(401).json({ message: statusCodes[401] });
    } catch (error) {
      res.status(400).json(error);
    }
  },


  /*
  * Logout Handler
  */
  logout: async (req, res) => {
    try {
      return res.status(200).json(await prisma.jwtRefreshToken.delete({ where: { token: refreshToken } }));
    } catch (error) {
      return res.status(400).json(error);
    }
  },


};
