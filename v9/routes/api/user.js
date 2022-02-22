const { user } = require('../../../handlers').api;
const userPath = '/api/user/';

module.exports = async (app) => {
  app.get(userPath, [user.list]);
  app.post(userPath, [user.create]);

  app.get(userPath + ':id', [user.byId]);
  app.put(userPath + ':id', [user.update]);
  app.delete(userPath + ':id', [user.delete]);
};
