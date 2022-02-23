const { asy } = require('../../helpers');
const { Post } = require('../../models');
const postModel = new Post();

module.exports = post = {

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
  },

  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.purge()));
  },

};
