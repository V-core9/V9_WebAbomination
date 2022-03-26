module.exports = {

  //? JWT Config Data [ Need to move into prisma for it to better work with server restarts and permanent login ]
  jwtConfig: require('./JWT'),

  //? Compression Settings for the middleware
  compression: {
    threshold: 0,
    level: 9
  },

};
