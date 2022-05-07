const { page } = require('../handlers');

module.exports = (app) => {



  app.route('/page/byId/:id')
    .get([
      page.byId
    ])
    .put([
      page.update
    ])
    .delete([
      page.delete
    ]);


  app.route('/page/bySlug/:slug')
    .get([
      page.bySlug
    ]);


  app.route('/page/:page?/:perPage?')
    .get([
      page.list
    ])
    .post([
      page.create
    ]);

  app.route('/page/purge/')
    .get([
      page.purge
    ]);


};
