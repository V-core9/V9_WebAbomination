//! SHORTER VERSION OF SYSTEM/ FOLDER

// Default port
const port = 2500;

// Express and setup
const express = require('express');
const v = express();

//Compression
var compression = require('compression');
v.use(compression());

// vAPI and vPAGE 
const vApi = require('./$_API');
const vPage = require('./$_APP');


const api_root = '/api';
const api_v1 = api_root + '/v1';

start = async () => {

    // API V1 Root
    v.get(api_root, vApi.root);
    v.get(api_v1, vApi.type);
    v.get(api_v1 + '/:type', vApi.all);
    v.get(api_v1 + '/:type/:name', vApi.one);

    //_________________________
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
