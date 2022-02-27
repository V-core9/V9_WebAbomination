module.exports = middleware = {

  isBot: require('./isBot'),
  geoIpLite: require('./geoIpLite'),
  xPoweredBy: require('./xPoweredBy'),

  jwtFromCookie: require('./jwtFromCookie'),

  validateAccessToken: require('./validateAccessToken'),
  validateAdmin: require('./validateAdmin'),

  bodyParser: require('body-parser'),
  compression: require('compression'),
  cookieParser: require('cookie-parser'),

};
