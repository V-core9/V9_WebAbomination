const { user } = require('../../../handlers').api;
const userPath = '/api/user/';

module.exports = async (router) => {
  router.get(userPath, [user.list]);
  router.post(userPath, [user.create]);

  router.get(userPath + ':id', [user.byId]);
  router.put(userPath + ':id', [user.update]);
  router.delete(userPath + ':id', [user.delete]);
};
