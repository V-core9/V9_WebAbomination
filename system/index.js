//! SHORTER VERSION OF SYSTEM/ FOLDER

const vDB = require('v_database');

// Configs
const config = require('./config');

const vApi = require('./$_API');
const v_action = require('./actions');


const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');


const v = express();

v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());

v.disable('etag');

v.use(async (req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' ; connect-src https://cloudflareinsights.com/cdn-cgi/rum  https://www.google-analytics.com/* ; script-src 'self' 'unsafe-inline' *.googletagmanager.com  ");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader('X-Powered-By', config.info.name + '.' + config.info.version + '.' + config.info.codename);
    next();
});

vServer = async ($port = config.port) => {


    //? API V1 Root
    v.get(vApi.api_root, vApi.root);

    //? [ TYPES ]>- - - - - -
    v.get(vApi.api_v1, vApi.$jwt, vApi.list);
    // ADMIN Create Type
    v.post(vApi.api_v1, vApi.$jwt, vApi.$admin, vApi.mk_type);
    // ADMIN Remove Type
    v.delete(vApi.api_v1, vApi.$jwt, vApi.$admin, vApi.rm_type);
    //! EOF_TYPES

    //? [ ITEMS ]>- - - - - -
    v.get(vApi.api_v1 + '/:type', vApi.$jwt, vApi.all);
    v.post(vApi.api_v1 + '/:type', vApi.$jwt, vApi.mk);

    v.get(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.one);
    v.put(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.up);
    v.delete(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.rm);
    //! EOF_ITEMS

    //? [ AUTH ]>- - - - - -
    v.post(vApi.api_v1 + '/auth/register', vApi.register);
    v.post(vApi.api_v1 + '/auth/login', vApi.login);
    v.post(vApi.api_v1 + '/auth/logout', vApi.logout);
    v.post(vApi.api_v1 + '/auth/token', vApi.logout);
    //! EOF_AUTH



    //? [ PAGES ]>- - - - - -
    var pages = await vDB.item.view(config.tables.pages);
    console.log(pages);
    pages.forEach(async page => {
        var data = await vDB.item.view(config.tables.pages, page);

        //console.log(data);
        v[data.type](data.path, v_action[data.name]);

        if (data.alt_paths !== undefined) {
            data.alt_paths.forEach(alt_path => {
                v[data.type](alt_path, v_action[data.name]);
            });
        }
    });

    //! EOF_PAGES


    //? [ STATIC-DIRS ]>- - - - - -
    config.static_dirs.forEach(dir => {
        v.use(express.static(dir, { etag: false , maxAge: 3600 }));
    });
    //! EOF_STATIC-DIRS


    //! START
    v.listen($port, async () => {
        console.log(`Example app listening at http://localhost:${$port}`);
    });


    v._router.strict = (config.strictRouter === true) ? true : false;
    v.locals.settings.env = (config.env === 'production' || config.env === 'development') ? config.env : 'production';
    v.locals.settings['x-powered-by'] = (config.hideXPoweredBy === true) ? false : true;

    if (config.compression === true) {
        v.use(compression({threshold: 0, level: 9}));
    }

};


module.exports = vServer;
