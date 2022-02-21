const { asy } = require('../../../../../helpers');
const { Page } = require('../../../../../models');
const { router } = require("../../../../../modules");

const pageModel = new Page();

pages = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await pageModel.all()));
};

pageById = async (req, res) => {
  return res.status(200).end(await asy.stringifyJSON(await pageModel.byId(await asy.parseInt(req.params.id))));
};

module.exports = async () => {
  router.get('/api/page/', [pages]);
  router.get('/api/page/:id', [pageById]);
};
