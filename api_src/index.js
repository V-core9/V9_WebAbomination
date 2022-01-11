//! SHORTER VERSION OF SYSTEM/ FOLDER
const config = require('./config');
const { auth, api_root, dataModel, logout, register, login } = require('./core');
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
    routes: [
        {
            type: 'get',
            path: '/application',
            handle: [auth.verify_jwt, vWebsite.application]
        },
        {
            type: 'get',
            path: '/dashboard',
            handle: [auth.verify_jwt, auth.verify_admin, vWebsite.dashboard]
        },
        // API ROOT
        {
            type: 'get',
            path: config.api_root,
            handle: [api_root]
        },
        //? [ TYPES ]>- - - - - -
        {
            type: 'get',
            path: config.api_v1,
            handle: [auth.verify_jwt, dataModel.list]
        },
        {
            type: 'post',
            path: config.api_v1,
            handle: [auth.verify_jwt, auth.verify_admin, dataModel.mk_type]
        },
        {
            type: 'delete',
            path: config.api_v1,
            handle: [auth.verify_jwt, auth.verify_admin, dataModel.rm_type]
        },
        //! EOF_TYPES
        //? [ AUTH ]>- - - - - -
        {
            type: 'post',
            path: config.api_v1 + '/auth/register',
            handle: [register]
        },
        {
            type: 'post',
            path: config.api_v1 + '/auth/login',
            handle: [login]
        },
        {
            type: 'post',
            path: config.api_v1 + '/auth/logout',
            handle: [logout]
        },
        {
            type: 'post',
            path: config.api_v1 + '/auth/token',
            handle: [auth.refreshAccessToken]
        },
        //! EOF_AUTH
        //? [ ITEMS ]>- - - - - -
        {
            type: 'get',
            path: config.api_v1 + '/:type',
            handle: [auth.verify_jwt, dataModel.all]
        },
        {
            type: 'post',
            path: config.api_v1 + '/:type',
            handle: [auth.verify_jwt, dataModel.mk]
        },
        {
            type: 'get',
            path: config.api_v1 + '/:type/:name',
            handle: [auth.verify_jwt, dataModel.one]
        },
        {
            type: 'put',
            path: config.api_v1 + '/:type/:name',
            handle: [auth.verify_jwt, dataModel.up]
        },
        {
            type: 'delete',
            path: config.api_v1 + '/:type/:name',
            handle: [auth.verify_jwt, dataModel.rm]
        },
        //! EOF_ITEMS
        {
            type: 'get',
            path: '/',
            handle: [vWebsite.index]
        },
        {
            type: 'get',
            path: '/blog/',
            handle: [vWebsite.blog]
        },
        {
            type: 'get',
            path: '/authors/',
            handle: [vWebsite.authors_page]
        },
        {
            type: 'get',
            path: '/:page_slug',
            handle: [vWebsite.pageBySlug]
        },
        {
            type: 'get',
            path: '/blog/:post_slug',
            handle: [vWebsite.postBySlug]
        },
        {
            type: 'get',
            path: '/author/:author_slug',
            handle: [vWebsite.authorBySlug]
        },
        {
            type: 'get',
            path: '/page_id/:page_id',
            handle: [vWebsite.pageByID]
        },
        {
            type: 'get',
            path: '/post_id/:post_id',
            handle: [vWebsite.postByID]
        },
        {
            type: 'get',
            path: '/admin/regenerate_sitemap',
            handle: [auth.verify_jwt, auth.verify_admin, sitemapGenerator.regenerate]
        },
        {
            type: 'get',
            path: '*',
            handle: [vWebsite.e404]
        },
    ],

    init: async ($port = config.port) => {

        await vWebsite.load();


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
