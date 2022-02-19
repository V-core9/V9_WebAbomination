const { router } = require("../../../../../modules");
const { users, userById } = require('../../app');

module.exports = async () => {
  router.get('/api/user/', [users]);
  router.get('/api/user/:id', [userById]);
};
