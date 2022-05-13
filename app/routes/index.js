var router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { jwtFromCookie, validateAccessToken } = require('../helpers/AUTH');



//? Get Page By SLUG or HOMEPAGE
const getPageBySlug = async (req, res, next) => {
  try {
    const data = await prisma.page.findUnique({ where: { slug: req.params.slug || 'home' } });
    console.log(data);
    if (data === null) return res.render('error', { message: 'Error 404: Page not found.', error: { status: 404, stack: JSON.stringify(new Error().stack) } });
    return res.render('page', data);
  } catch (err) {
    return res.render('error', { message: 'Prisma Client Error', error: err });
  }
};

//! Few Static Pages/Routes
//? Register New User Page
router.get('/register/', async (req, res, next) => {
  try {
    return res.render('form/register', await prisma.page.findUnique({ where: { slug: 'register' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


//? User Login Page
router.get('/login/', async (req, res, next) => {
  try {
    return res.render('form/login', await prisma.page.findUnique({ where: { slug: 'login' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


//? Contact Page
router.get('/contact/', async (req, res, next) => {
  try {
    return res.render('form/contact', await prisma.page.findUnique({ where: { slug: 'contact' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});



//? API Routes
router.use('/api', require('./API'));

//? APPLICATION Routes
router.use('/application', [jwtFromCookie, validateAccessToken], require('./APP'));

//? Public users
router.use('/users', require('./users'));

//? Public Blog Routes
router.use('/blog', require('./posts'));

//? Public Tags Routes
router.use('/tags', require('./tags'));

//? Home page & Page by Slug
router.get('/:slug?', getPageBySlug);




module.exports = router;
