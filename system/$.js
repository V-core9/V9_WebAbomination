//! SHORTER VERSION OF SYSTEM/ FOLDER

// Default port
const port = 2500;

// Express and setup
const express = require('express');
const v = express();

const bodyParser = require('body-parser');
//Compression
var compression = require('compression');
v.use(compression());


v.use(bodyParser.urlencoded({ extended: true }));
v.use(bodyParser.json());


// vAPI and vPAGE 
const vApi = require('./$_API');
const vPage = require('./$_APP');


const api_root = '/api';
const api_v1 = api_root + '/v1';

start = async () => {

    //? API V1 Root
    v.get(api_root, vApi.root);

    //* Types List
    v.get(api_v1, vApi.list);

    //* All Items of a type
    v.get(api_v1 + '/:type', vApi.all);
    //* One Item
    v.get(api_v1 + '/:type/:name', vApi.one);
    //* Make New Item
    v.post(api_v1 + '/:type', vApi.mk);
    //* Update Item
    v.put(api_v1 + '/:type/:name', vApi.up);
    //* Delete Item
    v.delete(api_v1 + '/:type/:name', vApi.rm);

    v.post(api_v1, vApi.mk_type);


    //? [ AUTH ]>- - - - - -
    // Login POST 
    v.post('/login', vApi.login);
    v.post('/logout', vApi.logout);

    //! EOF_[ AUTH ]


    // GET Public Pages
    v.get('/', vPage.root);
    v.get('/:name', vPage.page);

    // 404
    v.get('*', vPage.$404);

    // Static Folder
    v.use(express.static('./public/static'));

    // Start Server on Port
    v.listen(port, async () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });

};


start();
