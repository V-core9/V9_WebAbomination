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


vServer = async ($port = config.port) => {

    //? API V1 Root
    v.get(vApi.config.api_root, vApi.root);

    //? [ TYPES ]>- - - - - -
    v.get(vApi.config.api_v1, vApi.auth.jwt.verify_jwt, vApi.dataModel.list);
    v.post(vApi.config.api_v1, vApi.auth.jwt.verify_jwt, vApi.auth.jwt.verify_admin, vApi.dataModel.mk_type);
    v.delete(vApi.config.api_v1, vApi.auth.jwt.verify_jwt, vApi.auth.jwt.verify_admin, vApi.dataModel.rm_type);
    //! EOF_TYPES

    //? [ ITEMS ]>- - - - - -
    v.get(vApi.config.api_v1 + '/:type', vApi.auth.jwt.verify_jwt, vApi.dataModel.all);
    v.post(vApi.config.api_v1 + '/:type', vApi.auth.jwt.verify_jwt, vApi.dataModel.mk);

    v.get(vApi.config.api_v1 + '/:type/:name', vApi.auth.jwt.verify_jwt, vApi.dataModel.one);
    v.put(vApi.config.api_v1 + '/:type/:name', vApi.auth.jwt.verify_jwt, vApi.dataModel.up);
    v.delete(vApi.config.api_v1 + '/:type/:name', vApi.auth.jwt.verify_jwt, vApi.dataModel.rm);
    //! EOF_ITEMS

    //? [ AUTH ]>- - - - - -
    v.post(vApi.config.api_v1 + '/auth/register', vApi.auth.register);
    v.post(vApi.config.api_v1 + '/auth/login', vApi.auth.login);
    v.post(vApi.config.api_v1 + '/auth/logout', vApi.auth.logout);
    v.post(vApi.config.api_v1 + '/auth/token', vApi.auth.jwt.refreshAccessToken);
    //! EOF_AUTH


    //? PAGES
    //const path_types = [config.tables.pages, config.tables.posts, config.tables.authors ];
    const path_types = [config.tables.pages];
    path_types.forEach(async (type) => {
        var dataL = await vDB.item.view(type);
        dataL.forEach(async item => {
            var data = await vDB.item.view(type, item);
            console.log(data);
            v[data.type](data.path, v_action[data.exec]);
            if (data.alt_paths !== undefined) {
                data.alt_paths.forEach(alt_path => {
                    v[data.type](alt_path, v_action[data.exec]);
                });
            }
        });
    });
    
    //! EOF_PAGES

    v._router.strict = (config.strictRouter === true) ? true : false;
    v.locals.settings.env = (config.env === 'production' || config.env === 'development') ? config.env : 'production';
    v.locals.settings['x-powered-by'] = (config.hideXPoweredBy === true) ? false : true;


    //? [ STATIC-DIRS ]>- - - - - -
    config.static_dirs.forEach(dir => {
        v.use(express.static(dir, { etag: false, maxAge: 3600 }));
    });
    //! EOF_STATIC-DIRS

    //! START
    v.listen($port, async () => {
        console.log(`Example app listening at http://localhost:${$port}`);
    });
};

module.exports = vServer;
