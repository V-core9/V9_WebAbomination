var router = require('express').Router();


//? PAGES
router.get('/', async (req, res, next) => {
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

//? PAGES
router.get('/new', async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/forms/page_new.pug", {});
    } else {
      return res.forward('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});

//? PAGES
router.get('/edit/:id', async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    if (role === 'admin' || role === 'manager') {
      return res.render("application/" + req.user.role.toLowerCase() + "/page_edit.pug", {});
    } else {
      return res.forward('/application/');
    }
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


module.exports = router;
