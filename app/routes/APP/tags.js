var router = require('express').Router();

//? TAGS
router.get('/', async (req, res, next) => {
  try {
    return res.render("application/" + req.user.role.toLowerCase() + "/tag.pug", {});
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});

module.exports = router;
