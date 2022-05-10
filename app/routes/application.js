var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const { jwtFromCookie, validateAccessToken } = require('../helpers/AUTH');

//? Application Root Page
router.get('/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    return res.render("application/" + req.user.role.toLowerCase() + "/root.pug", req.user);
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});

//? PAGES
router.get('/page/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/page.pug", req.user);
    } else {
      return res.redirect('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});

//? POSTS
router.get('/post/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/post.pug", req.user);
    } else {
      return res.redirect('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


//? TAGS
router.get('/user/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/user.pug", req.user);
    } else {
      return res.redirect('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


//? TAGS
router.get('/tag/', [jwtFromCookie, validateAccessToken], async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/tag.pug", req.user);
    } else {
      return res.redirect('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});




module.exports = router;
