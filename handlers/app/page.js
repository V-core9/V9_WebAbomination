
const { Page } = require('../../models');

const pageModel = new Page();

pageResponse = async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  var { page } = req;
  return res.end(( page !== null ) ? page.content : 'Page not found');
};

module.exports = page = {
  home : async (req, res) => {
    req.page = await pageModel.home();
    return pageResponse(req, res);
  },

  bySlug : async (req, res) => {
    req.page = await pageModel.bySlug(req.params.slug);
    return pageResponse(req, res);
  },
};
