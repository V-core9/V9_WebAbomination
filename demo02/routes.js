const actions = require('./actions');

const { errors } = require('../modules');

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
