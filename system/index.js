const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const v_pages = require('./modules/pages');
const v_action = require('./actions');

//const v_middle = require('./middlewares');

const v = {

    // App <> EXPRESS 
    app: express(),

    config: null,

    // Settings for the app
    config_loader: require('./config'),

    // Application Routing
    set_routes: () => {

        Object.keys(v_pages._list).forEach(page => {

            var item = v_pages._list[page];

            if (typeof v_action[item.name] !== 'undefined') {
                v.app[item.type](item.path, v_action[item.name]);

                if (item.alt_paths !== undefined) {
                    item.alt_paths.forEach(alt_path => {
                        v.app[item.type](alt_path, v_action[item.name]);
                    });
                }
            }

        });

    },

    init: async () => {
        await v_pages.load();

        v.config = await v.config_loader();

        //v.app.use(v_middle.print_to_console);

        if (v.config.auto_init === true) {
            v.app.use(express.static(path.join(__dirname, '../public/static')));

            if (v.config.compression === true) {
                var compression = require('compression');
                v.app.use(compression());
            }

            v.app.use(bodyParser.urlencoded({ extended: true }));

            v.app.use(bodyParser.json());

            v.set_routes();

            v.app.listen(v.config.port, async () => {
                console.log('Website started on port ' + v.config.port);
            });
        } else {
            return false;
        }
    }

};



if (v.config.auto_init === true) v.init();

module.exports = v;
