const { asy } = require('../../../helpers');
const { User } = require('../../../models');

const userModel = new User();

const user = {
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
  }
};


var userPath = '/api/user/';

module.exports = async (router) => {
  router.get(userPath, [user.list]);
  router.post(userPath, [user.create]);

  router.get(userPath + ':id', [user.byId]);
  router.put(userPath + ':id', [user.update]);
  router.delete(userPath + ':id', [user.delete]);
};
