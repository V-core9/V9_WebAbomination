var router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* blog */
router.get('/', async (req, res, next) => {
  try {
    var data = await prisma.tag.findMany({});
    console.log(data);
    res.render('tags', { title: "V-core9 - All Tags List", metaDescription: "Freshest news and subjects related to development, gaming and tech", data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

/* GET user by id. */
router.get('/:slug', async (req, res, next) => {
  try {
    var data = await prisma.tag.findUnique({ where: { slug: req.params.slug }, include: { pages: true, posts: true } });
    console.log(data);
    res.render('tag', { title: "V-core9 - " + data.title, data: data });
  } catch (error) {
    return res.status(400).json(error);
  }
});




module.exports = router;
