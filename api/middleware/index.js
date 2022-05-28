const config = require('../config');

const isBot = require('./isBot');
const geoIp = require('./geoIp');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const xPoweredByRandom = require('x-powered-by-random');
var cors = require('cors');

middleware = async (app) => {


  //if (config.helmet) app.use(require("helmet")());

  //app.use(cors({ origin: 'http://localhost:80', optionsSuccessStatus: 200 }));

  app.use(cookieParser());

  app.use(compression(config.compression));

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json());

  app.use(isBot);

  app.use(geoIp);

  if (config.xPoweredByRandom) app.use(xPoweredByRandom);


};


middleware.jwtFromCookie = require('./jwtFromCookie');
middleware.validateAccessToken = require('./validateAccessToken');
middleware.validateAdmin = require('./validateAdmin');


module.exports = middleware;
