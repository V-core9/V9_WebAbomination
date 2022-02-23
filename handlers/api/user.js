const { asy } = require('../../helpers');
const { User } = require('../../models');
const userModel = new User();

module.exports = user = {
  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.all()));
  },

  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.byId(await asy.parseInt(req.params.id))));
  },

  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.register(await asy.parseJSON(req.body))));
  },

  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.update(await asy.parseInt(req.params.id), req.body)));
  },

  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.delete(await asy.parseInt(req.params.id))));
  },

  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.purge()));
  },
};
