var router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    return res.render("application/" + req.user.role.toLowerCase() + "/post.pug", {});
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


module.exports = router;
