const { router } = require("../../../../../modules");
const { blog, postBySlug } = require('../../app');

module.exports = async () => {
  router.get('/blog/', [blog]);
  router.get('/blog/:slug', [postBySlug]);
};
