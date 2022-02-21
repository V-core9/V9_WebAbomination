const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { Post } = require('../../../../../models');

const postModel = new Post();

blog = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await postModel.all()));
};

postBySlug = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await postModel.byArgs(req.params)));
};

module.exports = async () => {
  router.get('/blog/', [blog]);
  router.get('/blog/:slug', [postBySlug]);
};
