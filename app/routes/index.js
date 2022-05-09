var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const { jwtFromCookie, validateAccessToken } = require('../helpers/AUTH');


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



// STATIC APPLICATION PAGES

//? Dashboard / Application Homepage
router.get('/dashboard/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    return res.render("dashboard/" + req.user.role.toLowerCase(), req.user);
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});



//? Register New User Page
router.get('/register/', async (req, res, next) => {
  try {
    return res.render('form_register', await prisma.page.findUnique({ where: { slug: 'register' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});



//? User Login Page
router.get('/login/', async (req, res, next) => {
  try {
    return res.render('form_login', await prisma.page.findUnique({ where: { slug: 'login' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});



//? User Login Page
router.get('/contact/', async (req, res, next) => {
  try {
    return res.render('form_contact', await prisma.page.findUnique({ where: { slug: 'contact' } }));
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});




/* GET home page. */
router.get('/', getPageBySlug);

router.get('/:slug', getPageBySlug);



module.exports = router;
