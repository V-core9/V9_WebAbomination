module.exports = {

  //? JWT Config Data [ Need to move into prisma for it to better work with server restarts and permanent login ]
  jwtConfig: require('./jsonWebToken'),

  //? Express Monitoring Page [think it's bugged cuz it's only running in a single process and not in a cluster]
  sysMonitorPage: require('./systemMonitorPage'),

  //? Compression Settings for the middleware
  compression: {
    threshold: 0,
    level: 9
  },

};
