var router = require('express').Router();

//? USERS
router.get('/', async (req, res, next) => {
  try {
    const role = req.user.role.toLowerCase();
    return res.render("application/" + req.user.role.toLowerCase() + "/user.pug", {});
  } catch (error) {
    return res.render('error', { message: 'Application Client Error', error: error });
  }
});


module.exports = router;
