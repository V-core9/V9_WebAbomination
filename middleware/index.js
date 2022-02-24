module.exports = middleware = {

  isBot: require('./isBot'),
  geoIpLite: require('./geoIpLite'),
  xPoweredBy: require('./xPoweredBy'),
  jwtFromCookie: require('./jwtFromCookie'),

  //? Outside loaded middleware items
  bodyParser: require('body-parser'),
  compression: require('compression'),
  cookieParser: require('cookie-parser'),

};
