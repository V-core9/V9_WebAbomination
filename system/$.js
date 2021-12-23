//! SHORTER VERSION OF SYSTEM/ FOLDER

// vAPI and vPAGE 
const vApi = require('./$_API');
const vPage = require('./$_APP');

// Default port
const port = 2500;

// Express and setup
const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression');

const v = express();

v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());
v.use(compression());


//? API V1 Root
v.get(vApi.api_root, vApi.root);

//? TYPES
//* GET - List of Types
v.get(vApi.api_v1, vApi.$jwt, vApi.list);
//* POST - Create Type
v.post(vApi.api_v1, vApi.mk_type);
//* DELETE - Remove Type
v.delete(vApi.api_v1, vApi.mk_type);
//! EOF_TYPES


//? ITEMS
//* [all] - Items in a type
v.get(vApi.api_v1 + '/:type',  vApi.all);
//* [one] - Single Item
v.get(vApi.api_v1 + '/:type/:name', vApi.one);
//* [mk]  - New Item
v.post(vApi.api_v1 + '/:type', vApi.mk);
//* [up]  - Update Item
v.put(vApi.api_v1 + '/:type/:name', vApi.up);
//* [rm]  - Delete Item
v.delete(vApi.api_v1 + '/:type/:name', vApi.rm);
//! EOF_ITEMS


//? [ AUTH ]>- - - - - -
v.post(vApi.api_v1 + '/auth/register', vApi.register);
v.post(vApi.api_v1 + '/auth/login', vApi.login);
v.post(vApi.api_v1 + '/auth/logout', vApi.logout);
//! EOF_[ AUTH ]


//? GET Public Pages
v.get('/', vPage.root);
v.get('/:name', vPage.page);

//! 404
v.get('*', vPage.$404);


//? Static Folder
v.use(express.static('./public/static'));


//? Start Server on Port
v.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

