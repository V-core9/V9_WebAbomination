//! SHORTER VERSION OF SYSTEM/ FOLDER

const config = require('./config');

const vDB = require('v_database');
const vApi = require('./$_API');

// Express Things
const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');


const v = express();


//v.use(headMiddleware);

if (config.compression === true) {
    v.use(compression({ threshold: 0, level: 9 }));
}

v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());
v.disable('etag');

const vWebsite = require('./v_website');

generate_sitemap = async (type, output, index)=>{
    const v_sitemap = require('v_sitemap');
    const pages = await vDB.item.view(type);
    var DEMO_DATA = [];
    for (var i = 0; i < pages.length; i++) {
        DEMO_DATA.push(await vDB.item.view(type, pages[i]));
    }

    //? Example styled map
    const myStyledMap = {
        data: DEMO_DATA,
        index: index,
        output: output,
        stylesheet:  "localhost:3000/style/XSL/sitemap.xsl"
    };
    // Guess It has to be online to work with stylesheet cuz it's working once I put it online.
    console.log(await v_sitemap(myStyledMap));
    
};

page_sitemap = async ()=>{
    await generate_sitemap('pages', "public/pages_sitemap.xml", false);
};

post_sitemap = async ()=>{
    await generate_sitemap('posts', "public/posts_sitemap.xml", false);
};


const vServer = {
    routes: [
        // API ROOT
        {
            type: 'get',
            path: vApi.config.api_root,
            handle: [vApi.root]
        },
        //? [ TYPES ]>- - - - - -
        {
            type: 'get',
            path: vApi.config.api_v1,
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.list]
        },
        {
            type: 'post',
            path: vApi.config.api_v1,
            handle: [vApi.auth.jwt.verify_jwt, vApi.auth.jwt.verify_admin, vApi.dataModel.mk_type]
        },
        {
            type: 'delete',
            path: vApi.config.api_v1,
            handle: [vApi.auth.jwt.verify_jwt, vApi.auth.jwt.verify_admin, vApi.dataModel.rm_type]
        },
        //! EOF_TYPES
        //? [ AUTH ]>- - - - - -
        {
            type: 'post',
            path: vApi.config.api_v1 + '/auth/register',
            handle: [vApi.auth.register]
        },
        {
            type: 'post',
            path: vApi.config.api_v1 + '/auth/login',
            handle: [vApi.auth.login]
        },
        {
            type: 'post',
            path: vApi.config.api_v1 + '/auth/logout',
            handle: [vApi.auth.logout]
        },
        {
            type: 'post',
            path: vApi.config.api_v1 + '/auth/token',
            handle: [vApi.auth.jwt.refreshAccessToken]
        },
        //! EOF_AUTH
        //? [ ITEMS ]>- - - - - -
        {
            type: 'get',
            path: vApi.config.api_v1 + '/:type',
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.all]
        },
        {
            type: 'post',
            path: vApi.config.api_v1 + '/:type',
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.mk]
        },
        {
            type: 'get',
            path: vApi.config.api_v1 + '/:type/:name',
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.one]
        },
        {
            type: 'put',
            path: vApi.config.api_v1 + '/:type/:name',
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.up]
        },
        {
            type: 'delete',
            path: vApi.config.api_v1 + '/:type/:name',
            handle: [vApi.auth.jwt.verify_jwt, vApi.dataModel.rm]
        },
        //! EOF_ITEMS
        {
            type: 'get',
            path: '/',
            handle: [vWebsite.index]
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
    ],

    init: async ($port = config.port) => {
        
        await vWebsite.load();

        await page_sitemap();
        await post_sitemap();

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
    }
};



module.exports = vServer;
