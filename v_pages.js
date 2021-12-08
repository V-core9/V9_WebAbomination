const v_debugger = require('./v_debugger');

const isBot = require('isbot');
const geoip = require('geoip-lite');

// Turn these 2 into async functions
bot_check = async (agent) => {
    return isBot(agent);
};

geoip_check = async (ip) => {
    return geoip.lookup(ip);
};



const v_pages = {

    _list: {

        'index': {
            title: "Home",
            meta: {
                description: "Welcome to V-core9.com"
            }
        },

        'register': {
            title: "Register / Sign-up",
            meta: {
                description: "Register new account at V-core9.com"
            }
        },

        'login': {
            title: "Login/Sign-in",
            meta: {
                description: "LOGIN TO V-core9.com"
            }
        },

        'about': {
            title: "About Us",
            meta: {
                description: "Learn More with V-core9.com"
            }
        },

        'contact': {
            title: "Contact Us",
            meta: {
                description: "Send few signals to V-core9.com"
            }
        },

        'system_status': {
            title: "System Status V-core9",
            meta: {
                description: "Hopefully will provide more then some random text. Stats like server info, uptime...etc."
            }
        },

        'privacy_policy': {
            title: "Website Privacy Policy",
            meta: {
                description: "V-core9 Privacy Policy page to show some data about this."
            }
        },

        'terms_policy': {
            title: "Terms and Conditions",
            meta: {
                description: "Terms and conditions page for the V-core9 to show some data about this."
            }
        }

    },

    load(name) {
        if (this._list[name]) {
            return this._list[name];
        }
        return false;
    },

    render: async (req, res, data) => {

        var page = v_pages.load(data.page_name);

        var bot_status = await bot_check(req.headers['user-agent']);

        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        //if (bot_status === true) console.log(req.headers['user-agent']);

        var dbg_info = {
            ts: Date.now(),
            lookup: await geoip_check(ip),
            ip: ip,
            bot: bot_status,
            api_version: data.info.version,
            app_config: data.config,
            _pages: data.$_pages._list,
            _req_headers: req.headers || {},
        };

        res.end(`
                <!DOCTYPE html>
                    <html lang="${data.config.lang}">
                    <head>
                        <title>${page.title}</title>
                        <meta charset="${data.config.charset}">
                        <meta http-equiv="Content-Security-Policy" content="${data.config.ContentSecurityPolicy}">
                        <meta http-equiv="Object-Security-Policy" content="${data.config.ObjectSecurityPolicy}">
                        <meta name="viewport" content="${data.config.viewport}">
                        <meta name="description" content="${page.meta.description}" />
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
                        ${(data.config.v_debugger === true) ? await v_debugger(dbg_info) : ``}
                        <v_page> 
                            <hero>
                                <h1>${page.title}</h1>
                                <h2>${page.meta.description}</h2>
                                <h3>IP: ${ip}</h3>
                            </hero>
                        </v_page>
                    </body>
                    </html>
                `);

    },
};


module.exports = v_pages;
