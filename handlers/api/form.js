const { asy } = require('../../helpers');
const { Form } = require('../../models');
const formModel = new User();

module.exports = form = {
  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.all()));
  },
  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.byId(await asy.parseInt(req.params.id))));
  },
  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.register(await asy.parseJSON(req.body))));
  },
  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.update(await asy.parseInt(req.params.id), req.body)));
  },
  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.delete(await asy.parseInt(req.params.id))));
  },
  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.purge()));
  },
};
