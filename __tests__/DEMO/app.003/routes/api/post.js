const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { Post } = require('../../../../../models');

const postModel = new Post();

const post = {
  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.all()));
  },
  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.byId(await asy.parseInt(req.params.id))));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.create(req.body)));
  },
  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.update(await asy.parseInt(req.params.id), req.body)));
  },
  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.delete(await asy.parseInt(req.params.id))));
  }
};


var postPath = '/api/post/';

module.exports = async () => {
  router.get(postPath, [post.list]);
  router.post(postPath, [post.create]); // Creates new post

  router.get(postPath + ':id', [post.byId]); // Gets post by id
  router.put(postPath + ':id', [post.update]); // Updates post by id
  router.delete(postPath + ':id', [post.delete]); // Deletes post by id
};
