const { router } = require("../../../../../modules");
const { blog, postById } = require('../../app');

module.exports = async () => {
  router.get('/api/post/', [blog]);
  router.get('/api/post/:id', [postById]);
};
