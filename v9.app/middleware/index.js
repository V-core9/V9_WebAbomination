const { isBot, geoIpLite, xPoweredBy, bodyParser, compression, cookieParser } = require('../../middleware');
const config = require('../../config');

module.exports = async (expr) => {

  await expr.use(require('express-status-monitor')(config.sysMonitorPage));

  await expr.use(require("helmet")());

  await expr.use(cookieParser());

  await expr.use(compression(config.compression));

  await expr.use(bodyParser.urlencoded({ extended: true }));
  await expr.use(bodyParser.json());

  await expr.use(isBot);
  await expr.use(geoIpLite);

  await expr.use(xPoweredBy);

};
