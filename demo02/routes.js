const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const actions = {
  getHomepage: async (req, res) => {
    return res.json(await prisma.page.findUnique({where: {slug : '/'}}));
  },
  getBlog: async (req, res) => {
    return res.json(await prisma.post.findMany({take: 5}));
  },
  getPageBySlug: async (req, res) => {
    return res.json(await prisma.page.findUnique({where: { slug: req.params.slug}}));
  },
  userList: async (req, res) => {
    return res.json(await prisma.user.findMany({}));
  },
  userById: async (req, res) => {
    return res.json(await prisma.user.findUnique({where: {id : parseInt(req.params.id)}}));
  },
};

const errors = {
  '404': async (req, res) => res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`),
}

module.exports = {
  '/': {
    get: [actions.getHomepage]
  },
  '/blog': {
    get: [actions.getBlog]
  },
  '/user/': {
    get: [actions.userList]
  },
  '/user/:id': {
    get: [actions.userById]
  },
  '/:slug': {
    get: [actions.getPageBySlug]
  },
  '*': {
    get: [errors['404']],
    post: [errors['404']],
    put: [errors['404']],
    delete: [errors['404']],
  }
};
