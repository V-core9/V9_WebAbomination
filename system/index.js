const express = require('express');
const bodyParser = require('body-parser');

const v_pages = require('./modules/vPages');
const v_action = require('./vActions');

const v = {

    // App <> EXPRESS 
    app: express(),

    // Some info to provide
    info: require('./info'),

    // Settings for the app
    config: require('./config'),

    // Application Pages
    set_routes : () => {

        console.log(v_pages);
        Object.keys(v_pages._list).forEach(page => {
            var item = v_pages._list[page];
            v.app[item.type](item.path, v_action[page]);

            if (item.alt_paths !== undefined) {
                item.alt_paths.forEach(alt_path => {
                    v.app[item.type](alt_path, v_action[page]);
                });
            }
        });
    },

    init: () =>{
        if (v.config.compression === true) {
            var compression = require('compression');
            v.app.use(compression());
        }

        v.app.use(bodyParser.urlencoded({
            extended: true
        }));

        v.app.use(bodyParser.json());

        v.set_routes();

        v.app.listen(v.config.port, () => {
            console.log('Website started on port ' + v.config.port);
        });
    }

};

if ( v.config.auto_init === true ) v.init();

module.exports = v;
