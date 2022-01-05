//! SHORTER VERSION OF SYSTEM/ FOLDER

const config = require('./config');

const vDB = require('v_database');
const vApi = require('./$_API');
const v_action = require('./actions');
const { headMiddleware } = require('./helpers');

// Express Things
const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');


const v = express();


v.use(headMiddleware);

if (config.compression === true) {
    v.use(compression({ threshold: 0, level: 9 }));
}

v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());
v.disable('etag');


const v_routes = {
    _list: [
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
        }
        //! EOF_ITEMS
    ],
    load_pages_routes: async () => {
        //? [ PAGES ]>- - - - - -
        const pages = await vDB.item.view(config.tables.pages);
        for (let i = 0; i < pages.length; i++) {
            var data = await vDB.item.view(config.tables.pages, pages[i]);
            v_routes._list.push({ type: data.type, path: data.path, handle: v_action[data.exec] });

            if (data.alt_paths !== undefined) {
                for (let j = 0; j < data.alt_paths.length; j++) {
                    v_routes._list.push({ type: data.type, path: data.alt_paths[j], handle: v_action[data.exec] });
                }
            }
        }
        //! EOF_PAGES
    },
    load_posts_routes: async () => {
        //? [ PAGES ]>- - - - - -
        const pages = await vDB.item.view(config.tables.posts);
        for (let i = 0; i < pages.length; i++) {
            var data = await vDB.item.view(config.tables.posts, pages[i]);
            v_routes._list.push({ type: data.type, path: data.path, handle: v_action[data.exec] });

            if (data.alt_paths !== undefined) {
                for (let j = 0; j < data.alt_paths.length; j++) {
                    v_routes._list.push({ type: data.type, path: data.alt_paths[j], handle: v_action[data.exec] });
                }
            }
        }
        //! EOF_PAGES
    },
    load_authors_routes: async () => {
        //? [ PAGES ]>- - - - - -
        const pages = await vDB.item.view(config.tables.authors);
        for (let i = 0; i < pages.length; i++) {
            var data = await vDB.item.view(config.tables.authors, pages[i]);
            v_routes._list.push({ type: data.type, path: data.path, handle: v_action[data.exec] });

            if (data.alt_paths !== undefined) {
                for (let j = 0; j < data.alt_paths.length; j++) {
                    v_routes._list.push({ type: data.type, path: data.alt_paths[j], handle: v_action[data.exec] });
                }
            }
        }
        //! EOF_PAGES
    },

    init: async () => {
        
        await v_routes.load_pages_routes();
        await v_routes.load_posts_routes();
        await v_routes.load_authors_routes();
        
        //? [ ROUTES ]>- - - - - -
        for (let i = 0; i < v_routes._list.length; i++) {
            v[v_routes._list[i].type](v_routes._list[i].path, v_routes._list[i].handle);
        }
        //! EOF_ROUTES
    }
};


vServer = async ($port = config.port) => {
    await v_routes.init();

    v._router.strict = (config.strictRouter === true) ? true : false;
    v.locals.settings.env = (config.env === 'production' || config.env === 'development') ? config.env : 'production';
    v.locals.settings['x-powered-by'] = (config.hideXPoweredBy === true) ? false : true;

    config.static_dirs.forEach(dir => {
        v.use(express.static(dir, { etag: false, maxAge: 3600 }));
    });
    
    v.listen($port, async () => {
        console.log(`V_APP Started >> http://localhost:${$port}`);
    });
};

module.exports = vServer;
