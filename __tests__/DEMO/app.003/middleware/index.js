const {isBot, geoIpLite, xPoweredBy} = require('../../../../middleware');
const { router } = require("../../../../modules");

const bodyParser = require('body-parser');
var compression = require('compression');
const cookieParser = require('cookie-parser');

var compress = compression({ threshold: 0, level: 9 });

module.exports = async () => {
  await router.use(cookieParser());
  //await router.use(compress);
  await router.use(bodyParser.urlencoded({ extended: true }));
  await router.use(bodyParser.json());
  await router.use(isBot);
  await router.use(geoIpLite);
  await router.use(xPoweredBy);
};
