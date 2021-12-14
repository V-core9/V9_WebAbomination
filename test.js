//! SHORTER VERSION OF SYSTEM/ FOLDER

const express = require('express');
// Default port
const port = 2500;


const v_database = require('v_database');
const v_action = require('./system/modules/actions');

const v = {
    app : express(),

    run : async ($port = port) => {
        var pages = await v_database.type.view('pages');
        //console.log(pages);
    
        pages.forEach(async page => {
            var data = await v_database.item.view('pages', page);
            //console.log(data);
            v.app[data.type](data.path, v_action[data.name]);
    
            data.alt_paths.forEach(alt_path => {
                v.app[data.type](alt_path, v_action[data.name]);
            });
        });

        v.app.use(express.static('./public/static'));
    
        v.app.listen($port, async () => {
            console.log(`Example app listening at http://localhost:${$port}`);
        });
    }
};


v.run();
