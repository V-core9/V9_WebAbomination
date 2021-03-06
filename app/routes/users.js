var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    var data = await prisma.user.findMany({ take: 10, orderBy: { id: 'desc' }, select: { id: true, username: true, email: true, role: true, created: true, updated: true, active: true } });
    res.render('users', { data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

/* GET user by id. */
router.get('/:username', async (req, res, next) => {
  try {
    var data = await prisma.user.findUnique({ where: { username: req.params.username }, select: { id: true, username: true, email: true, role: true, created: true, updated: true, active: true } });
    res.render('user', { data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

/* GET user by id. */
router.get('/byId/:id', async (req, res, next) => {
  try {
    var data = await prisma.user.findUnique({ where: { id: parseInt(req.params.id) }, select: { id: true, username: true, email: true, role: true, created: true, updated: true, active: true } });
    res.render('user', { data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});



module.exports = router;
