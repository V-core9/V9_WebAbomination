var router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* blog */
router.get('/', async (req, res, next) => {
  try {
    var data = await prisma.post.findMany({ take: 10, orderBy: { id: 'desc' }, include: { tags: true } });
    res.render('blog-posts', { title: "V-core9 Blog Listing Page", metaDescription: "Freshest news and subjects related to development, gaming and tech", data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

/* GET user by id. */
router.get('/:slug', async (req, res, next) => {
  try {
    var data = await prisma.post.findUnique({ where: { slug: req.params.slug }, include: { tags: true } });
    res.render('blog-post', data);
  } catch (error) {
    return res.status(400).json(error);
  }
});




module.exports = router;
