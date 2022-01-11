//! SHORTER VERSION OF SYSTEM/ FOLDER
const config = require('./config');
const { head, csp, xPoweredBy, isBot, geoip, reqLog, cookieJWT } = require('./middlewares');
const vWebsite = require('./v_website');
const { sitemapGenerator } = require('./modules');

// Express Things
const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');
const cookieParser = require('cookie-parser');

const v = express();

v.use(cookieParser());
v.use(compression({ threshold: 0, level: 9 }));
v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());
v.disable('etag');

v.use(cookieJWT);
v.use(isBot);
v.use(geoip);
v.use(head);
v.use(csp);
v.use(xPoweredBy);
v.use(reqLog);


const vServer = {
    routes: require('./routes'),

    init: async ($port = config.port) => {

        await vWebsite.load();

        await sitemapGenerator.reGen();

        v._router.strict = (config.strictRouter === true) ? true : false;
        v.locals.settings.env = (config.env === 'production' || config.env === 'development') ? config.env : 'production';
        v.locals.settings['x-powered-by'] = (config.hideXPoweredBy === true) ? false : true;

        config.static_dirs.forEach(dir => {
            v.use(express.static(dir, { etag: false, maxAge: 3600 }));
        });

        //? [ ROUTES ]>- - - - - -
        for (let i = 0; i < vServer.routes.length; i++) {
            v[vServer.routes[i].type](vServer.routes[i].path, vServer.routes[i].handle);
        }
        //! EOF_ROUTES

        v.listen($port, async () => {
            console.log(`V_APP Started >> http://localhost:${$port}`);
        });
    },
};




module.exports = vServer;
