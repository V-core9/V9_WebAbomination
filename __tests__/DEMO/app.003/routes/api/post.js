const { router } = require("../../../../../modules");
const { asy } = require('../../../../../helpers');
const { Post } = require('../../../../../models');

const postModel = new Post();

posts = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await postModel.all()));
};

postById = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await postModel.byId(await asy.parseInt(req.params.id))));
};


module.exports = async () => {
  router.get('/api/post/', [posts]);
  router.get('/api/post/:id', [postById]);
};
