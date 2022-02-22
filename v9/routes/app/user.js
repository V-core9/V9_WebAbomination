

module.exports = async (router) => {
  router.get('/user/:username', [user.byUsername]);
};
