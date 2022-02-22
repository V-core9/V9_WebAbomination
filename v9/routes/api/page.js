const { page } = require('../../../handlers').api;
const pagePath = '/api/page/';

module.exports = async (app) => {
  app.get(pagePath, [page.list]); // Gets list of all pages
  app.post(pagePath, [page.create]); // Creates new page

  app.get(pagePath + ':id', [page.byId]); // Gets page by id
  app.put(pagePath + ':id', [page.update]); // Updates page by id
  app.delete(pagePath + ':id', [page.delete]); // Deletes page by id
};
