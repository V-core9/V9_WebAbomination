const { asy } = require('../../helpers');
const { Page } = require('../../models');
const pageModel = new Page();

module.exports = page = {
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
  },
  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await pageModel.purge()));
  },
};
