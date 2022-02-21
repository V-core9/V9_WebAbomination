const { asy } = require('../../../../../helpers');
const { Page } = require('../../../../../models');
const { router } = require("../../../../../modules");

const pageModel = new Page();

const page = {
  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await pageModel.all()));
  },

  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await pageModel.byId(await asy.parseInt(req.params.id))));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await pageModel.create(req.body)));
  },

  update: async (req, res) => {
    console.log(req.body);
    return res.status(200).end(await asy.stringifyJSON(await pageModel.update(await asy.parseInt(req.params.id), req.body)));
  },

  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await pageModel.delete(await asy.parseInt(req.params.id))));
  }

};

var pagePath = '/api/page/';

module.exports = async () => {
  router.get(pagePath, [page.list]); // Gets list of all pages
  router.post(pagePath, [page.create]); // Creates new page

  router.get(pagePath + ':id', [page.byId]); // Gets page by id
  router.put(pagePath + ':id', [page.update]); // Updates page by id
  router.delete(pagePath + ':id', [page.delete]); // Deletes page by id
};
