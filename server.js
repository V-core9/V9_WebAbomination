const express = require('express');
const bodyParser = require('body-parser');
const v_render = require('./system/modules/vPages/v_render');



const v = {

    // App <> EXPRESS 
    app : express(),


    // Some info to provide
    info: require('./system/info'),


    // Settings for the app
    config: require('./system/config'),


    // Application Pages
    $_pages: {

        _list: [

            {
                path: `/`,
                alt_paths: [
                    `/root`,
                    `/root.html`,
                    `/home`,
                    `/home.html`,
                    `/index`,
                    `/index.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'index'});
                }
            },

            {
                path: `/login`,
                alt_paths: [
                    `/sign-in`,
                    `/verify-user`,
                    `/login.html`,
                    `/sign-in.html`,
                    `/verify-user.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'login'});
                }
            },

            {
                path: `/register`,
                alt_paths: [
                    `/sign-up`,
                    `/sign-up.html`,
                    `/register.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'register'});
                }
            },

            {
                path: `/about-us`,
                alt_paths: [
                    `/about-us.html`,
                    `/about`,
                    `/about.html`,
                    `/info`,
                    `/info.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'about'});
                }
            },

            {
                path: `/contact`,
                alt_paths: [
                    `/contact.html`,
                    `/contact-us`,
                    `/contact-us.html`,
                    `/contact_us`,
                    `/contact_us.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'contact'});
                }
            },

            {
                path: `/system_status`,
                alt_paths: [
                    `/system_status.html`,
                    `/system-status`,
                    `/system-status.html`
                ],
                type: `get`,
                exec: async (req, res) => {
                    await v_render(req, res, {page_name : 'system_status'});
                }
            },

        ],

        init() {
            v.$_pages._list.forEach(page => {
                v.app[page.type](page.path, page.exec);

                if (page.alt_paths !== undefined) {
                    page.alt_paths.forEach(alt_path => {
                        v.app[page.type](alt_path, page.exec);
                    });
                }
            });
        }

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

        v.$_pages.init();

        v.app.listen(v.config.port, () => {
            console.log('Website started on port ' + v.config.port);
        });
    }

};


v.init();
