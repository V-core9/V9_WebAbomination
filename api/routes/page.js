const { page } = require('../handlers');

module.exports = (app) => {

  app.route('/page/:id?')
    .get([
      page.get
    ])
    .post([
      page.create
    ])
    .put([
      page.update
    ])
    .delete([
      page.delete
    ]);

};
