const { router } = require("../../../../../modules");
const { Page } = require('../../../../../models');

const pageModel = new Page();

homepage = async (req, res) => res.status(200).send((await pageModel.home()).content);

pageBySlug = async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  return res.end((await pageModel.bySlug(req.params.slug)).content || 'Page not found');
};

module.exports = async () => {
  router.get('/', [homepage]);
  router.get('/:slug', [pageBySlug]);
};
