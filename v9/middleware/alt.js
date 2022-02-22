const { isBot, geoIpLite, xPoweredBy, bodyParser, compression, cookieParser } = require('../../middleware');

module.exports = [
  cookieParser(),
  compression({ threshold: 0, level: 9 }),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  isBot,
  geoIpLite,
  xPoweredBy,
];
