const { post } = require('../handlers');

module.exports = (app) => {


  app.route('/post/')
    .get([
      post.list
    ])
    .post([
      post.create
    ]);


  app.route('/post/:id')
    .get([
      post.byId
    ])
    .put([
      post.update
    ])
    .delete([
      post.delete
    ]);


  app.route('/post/purge/')
    .get([
      post.purge
    ]);


};
