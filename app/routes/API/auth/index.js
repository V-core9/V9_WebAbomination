const statusCodes = require('http').STATUS_CODES;

const { jwtConfig } = require('../../../helpers/AUTH');
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const v_to_sha256 = require('v_to_sha256');
const v_rifier = require('v_rifier');

v_rifier.loadBuiltIns();


//!------------------------
//? AUTH - Handlers
//* 1. login
//* 2. refreshToken
//* 3. logout
//!------------------------

var router = require('express').Router();


router.post('/login', async (req, res, next) => {
  try {
    var { email, password } = req.body;

    if (((await v_rifier.isEmail(email)) == (await v_rifier.isPassword(password, password)) !== true)) return res.status(401).json({ message: statusCodes[401] });

    const user = await prisma.user.findUnique({ where: { email: email } });

    if ((user !== null) && (await v_to_sha256(password + user.salt) === user.password)) {
      const tokenData = { username: user.username, role: user.role };

      const accessToken = jwt.sign(tokenData, jwtConfig.access.secret, { expiresIn: jwtConfig.access.expires });
      const refreshToken = jwt.sign(tokenData, jwtConfig.refresh.secret);
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
    return res.status(400).json({ message: error });
  }
});


router.post('/token', async (req, res, next) => {
  try {
    const { token } = req.body;

    var status = await prisma.jwtRefreshToken.findUnique({ where: { token: token } });

    if (status !== null) {
      jwt.verify(token, jwtConfig.refresh.secret, (err, user) => {
        if (err) {
          return res.status(403).json({ message: statusCodes[403] });
        }

        return res.status(200).json({ accessToken: jwt.sign({ username: user.username, role: user.role }, jwtConfig.access.secret, { expiresIn: jwtConfig.access.expires }) });
      });
    } else {
      return res.status(401).json({ message: statusCodes[401] });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});


router.post('/logout', async (req, res) => {
  try {
    return res.status(200).json(await prisma.jwtRefreshToken.delete({ where: { token: req.body.token } }));
  } catch (error) {
    return res.status(400).json(error);
  }
});


module.exports = router;
