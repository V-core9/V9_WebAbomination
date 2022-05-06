var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* blog */
router.get('/', async (req, res, next) => {
  try {
    var data = await prisma.post.findMany({ take: 10, orderBy: { id: 'desc' } });
    res.render('blog-posts', { data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

/* GET user by id. */
router.get('/:slug', async (req, res, next) => {
  try {
    var data = await prisma.post.findUnique({ where: { slug: req.params.slug } });
    res.render('blog-post', data);
  } catch (error) {
    return res.status(400).json(error);
  }
});




module.exports = router;
