const { post } = require('../handlers');

module.exports = (app) => {


  app.route('/post/byId/:id')
    .get([
      post.byId
    ])
    .put([
      post.update
    ])
    .delete([
      post.delete
    ]);



  app.route('/post/bySlug/:slug')
    .get([
      post.bySlug
    ]);

  app.route('/post/purge/')
    .get([
      post.purge
    ]);


  app.route('/post/:page?/:perPage?')
    .get([
      post.list
    ])
    .post([
      post.create
    ]);


};
