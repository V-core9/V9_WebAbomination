const { asy } = require('../../helpers');
const { FormResponse } = require('../../models');
const formRespModel = new FormResponse();

module.exports = formResponse = {

  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.all()));
  },

  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.byId(await asy.parseInt(req.params.id))));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.register(await asy.parseJSON(req.body))));
  },

  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.update(await asy.parseInt(req.params.id), req.body)));
  },

  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.delete(await asy.parseInt(req.params.id))));
  },

  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formRespModel.purge()));
  },

};
