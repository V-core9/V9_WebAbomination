module.exports = async (app) => {
  await app.get('/user/:username', [user.byUsername]);
};
