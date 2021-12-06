
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var compression = require('compression');
var isBot = require('isbot');
var geoip = require('geoip-lite');

const v_debugger = require('./v_debugger');

const v_pages = {

    $_list: [
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
                v_pages._render_(req, res, {
                    charset: "UTF-8",
                    title: "Home",
                    meta: {
                        description: "Welcome to V-core9.com"
                    }
                });
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
                v_pages._render_(req, res, {
                    charset: "UTF-8",
                    title: "Login/Sign-in",
                    meta: {
                        description: "LOGIN TO V-core9.com"
                    }
                });
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
                v_pages._render_(req, res, {
                    charset: "UTF-8",
                    title: "Register / Sign-up",
                    meta: {
                        description: "Register new account at V-core9.com"
                    }
                });
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
                v_pages._render_(req, res, {
                    charset: "UTF-8",
                    title: "About Us",
                    meta: {
                        description: "Learn More with V-core9.com"
                    }
                });
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
                v_pages._render_(req, res, {
                    charset: "UTF-8",
                    title: "Contact Us",
                    meta: {
                        description: "Send few signals to V-core9.com"
                    }
                });
            }
        },
    ],

    _render_: async (req, res, data) => {

        var bot_status = await v.bot_check(req.headers['user-agent']);

        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        if (bot_status === true) console.log(req.headers['user-agent']);

        var user_info = {
            ts: Date.now(),
            lookup: await v.geoip_check(ip),
            ip: ip,
            bot: bot_status,
            api_version: v.info.version,
            app_config: v.config,
            _pages: v_pages.$_list,
            _req_headers: req.headers || {},
        };

        res.end(`
                <!DOCTYPE html>
                    <html lang="${v.config.lang}">
                    <head>
                        <title>${data.title}</title>
                        <meta charset="${data.charset}">
                        <meta http-equiv="Content-Security-Policy" content="${v.config.ContentSecurityPolicy}">
                        <meta http-equiv="Object-Security-Policy" content="${v.config.ObjectSecurityPolicy}">
                        <meta name="viewport" content="${v.config.viewport}">
                        <meta name="description" content="${data.meta.description}" />
                        <style>
                            * {
                                margin: 0;
                                padding: 0;
                                line-height: 1em;
                            }

                            body {
                                background: #102030;
                                color: white;
                            }
                            v_block {
                                margin: 1em;
                                display: flex;
                                flex-direction: column;
                                box-shadow: 0 5px 5px #10203010;
                            }
                            
                            v_block header {
                                padding: 0.5em 1em;
                                font-size: 1.25em;
                                background: #ebebeb;
                                color: #545454;
                                z-index: 10;
                            }
                            
                            v_block box {
                                display: flex;
                                flex-direction: column;
                                padding: 1em;
                                gap: 0.25em;
                                background: #80808014;
                                /* box-shadow: 0 0 10px black; */
                            }
                            
                            v_block box item {
                                background: #ebebeb;
                                padding: 0.5em 1em;
                                color: #505050;
                            }

                            v_block box item name {
                                font-weight: bold;
                                overflow-wrap: break-word;
                            }


                            v_block box item txt {
                                overflow-wrap: break-word;
                            }
                            
                            v_page {
                                padding: 1em;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                min-height: 100vh;
                            }
                        </style>
                    </head>
                    <body>
                        ${(v.config.v_debugger === true) ? await v_debugger(req, res, user_info) : ``}
                        <v_page> 
                            <hero>
                                <h1>${data.title}</h1>
                                <h2>${data.meta.description}</h2>
                                <h3>IP: ${ip}</h3>
                            </hero>
                        </v_page>
                    </body>
                    </html>
                `);

    },
    init() {
        v_pages.$_list.forEach(page => {
            app[page.type](page.path, page.exec);

            page.alt_paths.forEach(alt_path => {
                app[page.type](alt_path, page.exec);
            });
        });
    }
};



const v = {

    info: {
        version: '1.0.1',
    },

    config : {
        v_debugger: false,
        lang: 'en',
        port : process.env.PORT || 2500,
        viewport : "width=device-width",
        compression: true,
        ContentSecurityPolicy : "script-src 'unsafe-inline'", // 'none'
        ObjectSecurityPolicy : "object-src 'unsafe-inline'" // 'none'
    },
    isBot : require('isbot'),

    bot_check : async (agent) => {
        return v.isBot(agent);
    },

    geoip : require('geoip-lite'),

    geoip_check : async (ip) => {
        return v.geoip.lookup(ip);
    },
    init(){
        if (v.config.compression === true) app.use(compression());

        app.use(bodyParser.urlencoded({
            extended: true
        }));
        
        app.use(bodyParser.json());

        v_pages.init();
        

        app.listen(v.config.port, () => {
            console.log('Website started on port '+v.config.port);
        });
    }

};

v.init();
