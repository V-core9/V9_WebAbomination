const { asy } = require('../../helpers');
const { Post } = require('../../models');
const postModel = new Post();

module.exports = post = {

  blog: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.all()));
  },

  bySlug: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await postModel.byArgs(req.params)));
  },

};
