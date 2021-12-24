//! SHORTER VERSION OF SYSTEM/ FOLDER

// Configs
const port = 2500;
const static_dirs = [
    './public'
];

const vTables = require('./system/config/tables');

// Custom things
const vApi = require('./system/$_API');
const $404 = async (req, res) => {
    page_render(res, '<h2>NOT FOUND : 404</h2><h3>PATH: ' + req.path + '</h3>');
};
const vDB = require('v_database');
const v_action = require('./system/actions');
// Express and setup
const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');

const v = express();

v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());
v.use(compression());

start_on = async ($port = port) => {


    //? API V1 Root
    v.get(vApi.api_root, vApi.root);

    //? [ TYPES ]>- - - - - -
    v.get(vApi.api_v1, vApi.$jwt, vApi.list);
    v.post(vApi.api_v1, vApi.$jwt, vApi.$admin, vApi.mk_type);
    v.delete(vApi.api_v1, vApi.$jwt, vApi.$admin, vApi.rm_type);
    //! EOF_TYPES

    //? [ ITEMS ]>- - - - - -
    v.get(vApi.api_v1 + '/:type', vApi.$jwt, vApi.all);
    v.get(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.one);
    v.post(vApi.api_v1 + '/:type', vApi.$jwt, vApi.mk);
    v.put(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.up);
    v.delete(vApi.api_v1 + '/:type/:name', vApi.$jwt, vApi.rm);
    //! EOF_ITEMS

    //? [ AUTH ]>- - - - - -
    v.post(vApi.api_v1 + '/auth/register', vApi.register);
    v.post(vApi.api_v1 + '/auth/login', vApi.login);
    v.post(vApi.api_v1 + '/auth/logout', vApi.logout);
    //! EOF_AUTH


    //? [ PAGES ]>- - - - - -
    var pages = await vDB.item.view(vTables.pages);
    pages.forEach(async page => {
        var data = await vDB.item.view(vTables.pages, page);

        v[data.type](data.path, v_action[data.name]);
        v.get(data.path + '/*', $404);

        if (data.alt_paths !== undefined) {
            data.alt_paths.forEach(alt_path => {
                v[data.type](alt_path, v_action[data.name]);
                v.get(alt_path + '/*', $404);
            });
        }
    });
    //! EOF_PAGES


    //? [ STATIC-DIRS ]>- - - - - -
    static_dirs.forEach(dir => {
        v.use(express.static(dir));
    });
    //! EOF_STATIC-DIRS


    //! 404
    //v.get('/*', vPage.$404);


    //! START
    v.listen($port, async () => {
        console.log(`Example app listening at http://localhost:${$port}`);
    });

};


start_on();
//start_on(4500);
