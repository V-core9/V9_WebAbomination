const { router } = require("../../../../../modules");
const { Page } = require('../../../../../models');

const pageModel = new Page();

pageResponse = (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  var { page } = req;
  return res.end(( page !== null ) ? page.content : 'Page not found');
};

homepage = async (req, res) => {
  req.page = await pageModel.home();
  return pageResponse(req, res);
};

pageBySlug = async (req, res) => {
  req.page = await pageModel.bySlug(req.params.slug);
  return pageResponse(req, res);
};

module.exports = async () => {
  router.get('/', [homepage]);
  router.get('/:slug', [pageBySlug]);
};
