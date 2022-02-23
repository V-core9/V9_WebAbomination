const { vCore9 } = require('../../../render').render;
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


homepage = async (req, res) => {
  req.page = await prisma.page.findUnique({ where: { slug: "/" } });
  return pageResponse(req, res);
};

pageBySlug = async (req, res) => {
  req.page = await prisma.page.findFirst({ where: { slug: req.params.slug, published: true } });
  return pageResponse(req, res);
};



module.exports = async (app) => {
  await app.get('/', [homepage]);
  await app.get('/:slug', [pageBySlug]);
};
