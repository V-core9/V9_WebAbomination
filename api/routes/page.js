const { page } = require('../handlers');

module.exports = (app) => {
  app.route('/page/')
    .get([
      page.list
    ])
    .post([
      page.create
    ]);


  app.route('/page/:id')
    .get([
      page.byId
    ])
    .put([
      page.update
    ])
    .delete([
      page.delete
    ]);

  app.route('/page/purge/')
    .get([
      page.purge
    ]);
};
