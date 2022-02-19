const { router } = require("../../../../../modules");
const { homepage, pageBySlug } = require('../../app');

module.exports = async () => {
  router.get('/', [homepage]);
  router.get('/:slug', [pageBySlug]);
};
