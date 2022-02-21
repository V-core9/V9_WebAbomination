const { isBot, geoIpLite, xPoweredBy, bodyParser, compression, cookieParser } = require('../../middleware');

module.exports = async (router) => {
  await router.use(cookieParser());
  await router.use(compression({ threshold: 0, level: 9 }));
  await router.use(bodyParser.urlencoded({ extended: true }));
  await router.use(bodyParser.json());
  await router.use(isBot);
  await router.use(geoIpLite);
  await router.use(xPoweredBy);
};
