
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var compression = require('compression');

const v_pages = require('./v_pages');





const v = {

    // Some info to provide
    info: {
        version: '1.0.1',
    },

    // Settings for the app
    config: {
        v_debugger: true,
        charset: "UTF-8",
        lang: 'en',
        port: process.env.PORT || 2500,
        viewport: "width=device-width",
        compression: true,
        ContentSecurityPolicy: "script-src 'unsafe-inline'", // 'none'
        ObjectSecurityPolicy: "object-src 'unsafe-inline'" // 'none'
    },




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
                    await v_pages.render(req, res, {page_name : 'index', info: v.info, config: v.config, $_pages: v.$_pages});
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
                    await v_pages.render(req, res, {page_name : 'login', info: v.info, config: v.config, $_pages: v.$_pages});
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
                    await v_pages.render(req, res, {page_name : 'register', info: v.info, config: v.config, $_pages: v.$_pages});
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
                    await v_pages.render(req, res, {page_name : 'about', info: v.info, config: v.config, $_pages: v.$_pages});
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
                    await v_pages.render(req, res, {page_name : 'contact', info: v.info, config: v.config, $_pages: v.$_pages});
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
                    await v_pages.render(req, res, {page_name : 'system_status', info: v.info, config: v.config, $_pages: v.$_pages});
                }
            },

        ],

        init() {
            v.$_pages._list.forEach(page => {
                app[page.type](page.path, page.exec);

                if (page.alt_paths !== undefined) {
                    page.alt_paths.forEach(alt_path => {
                        app[page.type](alt_path, page.exec);
                    });
                }
            });
        }

    },

    init() {
        if (v.config.compression === true) app.use(compression());

        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(bodyParser.json());

        v.$_pages.init();

        app.listen(v.config.port, () => {
            console.log('Website started on port ' + v.config.port);
        });
    }

};

v.init();
