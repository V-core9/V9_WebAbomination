const express = require('express');
const bodyParser = require('body-parser');
const v_render = require('./modules/vPages/v_render');

const v_pages = require('./modules/vPages');

const $_pages = {
    'index': async (req, res) => {
        v_render(req, res, { page_name: 'index' });
    },
    'about': async (req, res) => {
        v_render(req, res, { page_name: 'about' });
    },
    'contact': async (req, res) => {
        v_render(req, res, { page_name: 'contact' });
    },
    'login': async (req, res) => {
        v_render(req, res, { page_name: 'login' });
    },
    'privacy_policy': async (req, res) => {
        v_render(req, res, { page_name: 'privacy_policy' });
    },
    'register': async (req, res) => {
        v_render(req, res, { page_name: 'register' });
    },
    'system_status': async (req, res) => {
        v_render(req, res, { page_name: 'system_status' });
    },
    'terms_policy': async (req, res) => {
        v_render(req, res, { page_name: 'terms_policy' });
    },
};

const v = {

    // App <> EXPRESS 
    app: express(),

    // Some info to provide
    info: require('./info'),

    // Settings for the app
    config: require('./config'),

    // Application Pages
    set_routes() {

        console.log(v_pages);
        Object.keys(v_pages._list).forEach(page => {
            var item = v_pages._list[page];
            v.app[item.type](item.path, $_pages[page]);

            if (item.alt_paths !== undefined) {
                item.alt_paths.forEach(alt_path => {
                    v.app[item.type](alt_path, $_pages[page]);
                });
            }
        });
    },

    init() {
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


v.init();
