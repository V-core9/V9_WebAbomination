const { isBot, geoIpLite, bodyParser, compression, cookieParser } = require('../../middleware');
const config = require('../../config');

const xPoweredByRandom = require('x-powered-by-random');

module.exports = async (app) => {
  app.use(require('express-status-monitor')(config.sysMonitorPage));
  app.use(require("helmet")());
  app.use(xPoweredByRandom);
  app.use(cookieParser());
  app.use(compression(config.compression));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(isBot);
  app.use(geoIpLite);
};
