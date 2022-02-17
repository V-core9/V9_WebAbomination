const app = {
  actions: {
    getHomepage: (req, res) => {
      return res.end('Hello World');
    },
    getBlog: (req, res) => {
      return res.end('Getting BLOG PAGE');
    },
    getPageBySlug: (req, res) => {
      return res.end(req.params.slug);
    }
  },
  errors: {
    '404': async (req, res) => res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`)
  }
};

module.exports = {
  '/': {
    get: [app.actions.getHomepage]
  },
  '/:slug': {
    get: [app.actions.getPageBySlug]
  },
  '/blog': {
    get: [app.actions.getBlog]
  },
  '*': {
    get: [app.errors['404']],
    post: [app.errors['404']],
    put: [app.errors['404']],
    delete: [app.errors['404']],
  }
};
