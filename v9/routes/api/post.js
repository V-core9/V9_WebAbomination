const { post } = require('../../handlers').api;

module.exports = async (app) => {
  app.get('/api/post/', [post.list]);
  app.post('/api/post/', [post.create]);

  app.get('/api/post/purge/', [post.purge]);

  app.get('/api/post/:id', [post.byId]);
  app.put('/api/post/:id', [post.update]);
  app.delete('/api/post/:id', [post.delete]);
};
