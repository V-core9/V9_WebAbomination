const { post } = require('../handlers');

module.exports = (app) => {

  app.route('/post/:id?')
    .post([
      post.create
    ])
    .get([
      post.read
    ])
    .put([
      post.update
    ])
    .delete([
      post.delete
    ]);

};
