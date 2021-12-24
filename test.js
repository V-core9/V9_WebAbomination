//! SHORTER VERSION OF SYSTEM/ FOLDER

const express = require('express');
// Default port
const port = 2500;
const static_dirs = [
    './public/static',
    './public/js'
];


const v_database = require('v_database');
const v_action = require('./system/modules/actions');

const v = express();

start_on = async ($port = port) => {
    var pages = await v_database.item.view('pages');

    pages.forEach(async page => {
        var data = await v_database.item.view('pages', page);

        v[data.type](data.path, v_action[data.name]);

        if (data.alt_paths !== undefined) {
            data.alt_paths.forEach(alt_path => {
                v[data.type](alt_path, v_action[data.name]);
            });
        }
    });

    static_dirs.forEach(dir => {
        v.use(express.static(dir));
    });

    v.listen($port, async () => {
        console.log(`Example app listening at http://localhost:${$port}`);
    });
};


start_on();
//start_on(4500);
