const { router } = require("../../../../../modules");
const { pages, pageById } = require('../../app');

module.exports = async () => {
  router.get('/api/page/', [pages]);
  router.get('/api/page/:id', [pageById]);
};
