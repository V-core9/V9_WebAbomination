const { post } = require('../../../handlers').api;
const postPath = '/api/post/';

module.exports = async (router) => {
  router.get(postPath, [post.list]);
  router.post(postPath, [post.create]); // Creates new post

  router.get(postPath + ':id', [post.byId]); // Gets post by id
  router.put(postPath + ':id', [post.update]); // Updates post by id
  router.delete(postPath + ':id', [post.delete]); // Deletes post by id
};
