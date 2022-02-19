const {isBot, geoIpLite, xPoweredBy} = require('../../../middleware');

const bodyParser = require('body-parser');
var compression = require('compression');
const cookieParser = require('cookie-parser');

module.exports = [
  cookieParser(),
  compression({ threshold: 0, level: 9 }),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  isBot,
  geoIpLite,
  xPoweredBy,
];

