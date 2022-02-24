const { post } = require('../../handlers').api;

module.exports = async (app) => {
  app.route('/api/post/')
    .get(post.list)
    .post(post.create);

  app.route('/api/post/:id')
    .get(post.byId)
    .put(post.update)
    .delete(post.delete);

  app.get('/api/post/purge/', [post.purge]);
};
