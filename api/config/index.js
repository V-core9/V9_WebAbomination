const config = {

  devMode: process.env.NODE_ENV === 'dev' || false,

  //? Log Settings
  logToConsole: true,
  logToFile: true,

  //? JWT Config Data [ Need to move into prisma for it to better work with server restarts and permanent login ]
  jwtCfg: require('./JWT'),

  //? Compression Settings for the middleware
  compression: {
    threshold: 0,
    level: 9
  },

  disableEtag: true,

  helmet: true,

  xPoweredByRandom: true,

  init: (app) => {

    if (config.disableEtag) app.set('etag', false);

  }
};

module.exports = config;
