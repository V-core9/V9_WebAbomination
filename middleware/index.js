
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const xPoweredByRandom = require('x-powered-by-random');

const isBot = require('./isBot');
const geoIpLite = require('./geoIpLite');
const jwtFromCookie = require('./jwtFromCookie');
const validateAccessToken = require('./validateAccessToken');
const validateAdmin = require('./validateAdmin');

const config = require('../config');



module.exports = {
  init: async (app) => {
  app.use(require('express-status-monitor')(config.sysMonitorPage));
  //app.use(require("helmet")());

  app.use(xPoweredByRandom);

  app.use(cookieParser());

  app.use(compression(config.compression));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(isBot);

  app.use(geoIpLite);
  },
  jwtFromCookie,
  validateAccessToken,
  validateAdmin,
};
