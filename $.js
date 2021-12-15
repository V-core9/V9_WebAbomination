//! SHORTER VERSION OF SYSTEM/ FOLDER

// Default port
const port = 2004;

const express = require('express');
const v = express();

const vApi = require('./$_api');
const vPage = require('./$_app.page');


const api_path = '/api/';
const api_v1_path = api_path + 'v1/';

start = async () => {

    // API V1 Root
    v.get(api_path, vApi.root);
    v.get(api_v1_path, vApi.v1);

    // Get Page[s]
    // list all pages
    v.get(api_v1_path + 'page/', vApi.page.list);
    // load single page by name
    v.get(api_v1_path + 'page/:name', vApi.page.name);


    // Get Post[s]
    v.get(api_v1_path + 'post/', vApi.post.list);
    // load single post by name
    v.get(api_v1_path + 'post/:name', vApi.post.name);

    // API 404
    v.get('/api/v1/*', vApi.$404);



    //_________________________
    // GET Public Pages
    v.get('/', vPage.root);
    v.get('/:page', vPage.page);


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
