const { vCore9 } = require('../../render').render;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

pageResponse = async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  var page = req.page || { renderMode: 'html', content: 'No Page Found!' };

  var renderMode = page.renderMode || 'html';
  switch (renderMode) {
    case "html":
      return res.end(page.content);

    case "vCore9":
      return res.end(await vCore9(page));

    default:
      return res.end("Unknown Render Mode");
  }
};

module.exports = page = {

  home: async (req, res) => {
    req.page = await prisma.page.findUnique({ where: { slug: "home" } });
    return pageResponse(req, res);
  },

  bySlug: async (req, res) => {
    var filter = { slug: req.params.slug, published: true };

    if (req.params.ext !== undefined) {
      if (["htm", "html"].indexOf(req.params.ext) === -1) {
        filter = { slug: `${req.params.slug}.${req.params.ext}`, published: true };
      }
    }

    req.page = await prisma.page.findFirst({ where: filter });
    return pageResponse(req, res);
  },

};
