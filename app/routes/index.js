var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getPageBySlug = async (req, res, next) => {
  try {
    const data = await prisma.page.findUnique({ where: { slug: req.params.slug || 'home' } });
    console.log(data);
    if (data === null) return res.render('error', { message: 'Error 404: Page not found.', error: { status: 404 } });
    return res.render('page', data);
  } catch (err) {
    return res.render('error', { message: 'Prisma Client Error', error: err });
  }
}

/* GET home page. */
router.get('/', getPageBySlug);

router.get('/:slug', getPageBySlug);



module.exports = router;
