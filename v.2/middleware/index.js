
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const xPoweredByRandom = require('x-powered-by-random');

const isBot = require('./isBot');
const geoIp = require('./geoIp');

const config = require('../config');

middleware = async (app) => {
  app.use(require('express-status-monitor')(config.sysMonitorPage));

  //app.use(require("helmet")());
  app.use(cookieParser());
  app.use(compression(config.compression));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(isBot);
  app.use(geoIp);

  app.use(xPoweredByRandom);
};

middleware.jwtFromCookie = require('./jwtFromCookie');
middleware.validateAccessToken = require('./validateAccessToken');
middleware.validateAdmin = require('./validateAdmin');

module.exports = middleware;
