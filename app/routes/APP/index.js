var router = require('express').Router();

//? Application Root Page
router.get('/', async (req, res, next) => {
  try {
    return res.render("application/" + req.user.role.toLowerCase() + "/root.pug", req.user);
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});

router.use('/users', require('./users'));
router.use('/tags', require('./tags'));
router.use('/posts', require('./posts'));
router.use('/pages', require('./pages'));


module.exports = router;
