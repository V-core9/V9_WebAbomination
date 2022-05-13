var router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    return res.json({ title: "V-core9 Blog Listing Page", metaDescription: "Freshest news and subjects related to development, gaming and tech" });
  } catch (error) {
    return res.status(400).json(error);
  }
});


router.use('/auth',require('./auth'));
router.use('/pages',require('./pages'));
router.use('/posts',require('./posts'));
router.use('/users',require('./users'));

module.exports = router;
