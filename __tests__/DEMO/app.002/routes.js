const actions = require('./actions');

const { errors } = require('../../../modules');

//? Example routes structure that gets created by the router.
//* This will be just appointed to the router.routes object just to show how it works.
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
  '/page/': {
    get: [actions.listPages]
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
