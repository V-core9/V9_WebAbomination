const config = {

  //? JWT Config Data [ Need to move into prisma for it to better work with server restarts and permanent login ]
  jwtConfig: require('./JWT'),

  //? Compression Settings for the middleware
  compression: {
    threshold: 0,
    level: 9
  },


  disableEtag: true,


  init: (app) => {

    if (config.disableEtag) app.set('etag', false);

  }
};

module.exports = config;