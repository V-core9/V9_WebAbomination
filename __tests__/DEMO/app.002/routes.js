const { errors } = require('../../../modules');
const actions = require('./actions');
//? Example routes structure that gets created by the router.
//* This will be just appointed to the router.routes object just to show how it works.
module.exports = {
  '/': {
    get: [actions.homepage]
  },
  '/blog': {
    get: [actions.blog]
  },
  '/user/': {
    get: [actions.users]
  },
  '/user/:id': {
    get: [actions.userById]
  },
  '/page/': {
    get: [actions.pages]
  },
  '/:slug': {
    get: [actions.pageBySlug]
  },
  '*': {
    get: [errors['404']],
    post: [errors['404']],
    put: [errors['404']],
    delete: [errors['404']],
  }
};
