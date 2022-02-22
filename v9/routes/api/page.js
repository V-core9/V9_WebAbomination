const { page } = require('../../../handlers').api;
const pagePath = '/api/page/';

module.exports = async (router) => {
  router.get(pagePath, [page.list]); // Gets list of all pages
  router.post(pagePath, [page.create]); // Creates new page

  router.get(pagePath + ':id', [page.byId]); // Gets page by id
  router.put(pagePath + ':id', [page.update]); // Updates page by id
  router.delete(pagePath + ':id', [page.delete]); // Deletes page by id
};
