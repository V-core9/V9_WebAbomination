const { post } = require('../../../handlers').api;
const postPath = '/api/post/';

module.exports = async (app) => {
  app.get(postPath, [post.list]);
  app.post(postPath, [post.create]); // Creates new post

  app.get(postPath + ':id', [post.byId]); // Gets post by id
  app.put(postPath + ':id', [post.update]); // Updates post by id
  app.delete(postPath + ':id', [post.delete]); // Deletes post by id
};
