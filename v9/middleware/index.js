const { isBot, geoIpLite, xPoweredBy, bodyParser, compression, cookieParser } = require('../../middleware');

module.exports = async (app) => {
  await app.use(cookieParser());
  await app.use(compression({ threshold: 0, level: 9 }));
  await app.use(bodyParser.urlencoded({ extended: true }));
  await app.use(bodyParser.json());
  await app.use(isBot);
  await app.use(geoIpLite);
  await app.use(xPoweredBy);
};
