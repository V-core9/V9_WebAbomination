const { isBot, geoIpLite, xPoweredBy, bodyParser, compression, cookieParser } = require('../../middleware');
const config = require('../../config');

module.exports = async (app) => {

  await app.use(require('express-status-monitor')(config.sysMonitorPage));

  await app.use(require("helmet")());

  await app.use(cookieParser());

  await app.use(compression(config.compression));

  await app.use(bodyParser.urlencoded({ extended: true }));
  await app.use(bodyParser.json());

  await app.use(isBot);
  await app.use(geoIpLite);

  await app.use(xPoweredBy);

};
