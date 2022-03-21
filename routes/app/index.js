const { vApp, post, page, user, auth } = require('../../handlers').app;
const { jwtFromCookie, validateAccessToken } = require('../../middleware');

module.exports = (app) => {

  //? Application Index/Root/Dash
  app
    .route('/application/')
    .get([jwtFromCookie, validateAccessToken, vApp.index]);

  //? Blog/Posts
  app
    .route('/blog/')
    .get([post.blog]);

  app
    .route('/blog/:slug')
    .get([post.bySlug]);

  //? Users/Authors
  app
    .route('/users/')
    .get([user.listing]);

  app
    .route('/user/:username')
    .get([user.byUsername]);

  //? Static pages
  //* NOTE: Going as last to support static
  //*       routes for /blog/ & /user/... etc.
  app
    .route('/')
    .get([page.home]);

  app
    .route('/:slug')
    .get([page.bySlug]);

};
