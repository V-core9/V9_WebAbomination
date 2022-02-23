
const { vCore9 } = require('../../render').render;

const { Page } = require('../../models');
const pageModel = new Page();

pageResponse = async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  var { page } = req;
  if (page !== null) {
    switch (page.renderMode) {
      case "html":
        return res.end(page.content);

      case "vCore9":
        return res.end(await vCore9(page));

      default:
        return res.end("Unknown Render Mode");
    }
  } else {
    return res.end('Page not found');
  }

};

module.exports = page = {

  home: async (req, res) => {
    req.page = await pageModel.home();
    return pageResponse(req, res);
  },

  bySlug: async (req, res) => {
    req.page = await pageModel.bySlug(req.params.slug);
    return pageResponse(req, res);
  },

};
