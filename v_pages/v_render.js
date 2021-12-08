const { geoip_check, bot_check } = require('../system/helpers');
const v_debugger = require('../v_debugger');
const v_pages = require('.');

module.exports = async (req, res, data) => {

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

};
