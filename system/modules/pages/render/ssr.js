
const config = require('../../../config');
const v_debugger = require('../../debugger');

module.exports = async (req, res, data) => {
    res.end(`
        <!DOCTYPE html>
            <html lang="${config.lang}">
            <head>
                <title>${data.page.title}</title>
                <meta charset="${config.charset}">
                <meta http-equiv="Content-Security-Policy" content="${config.ContentSecurityPolicy}">
                <meta http-equiv="Object-Security-Policy" content="${config.ObjectSecurityPolicy}">
                <meta name="viewport" content="${config.viewport}">
                <meta name="description" content="${data.page.meta.description}" />
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
                ${(config.v_debugger === true) ? await v_debugger(data) : ``}
                <v_page> 
                    <hero>
                        <h3>Render_Mode: <strong style='color: orange;'><] SSR [></strong></h3>
                        <h1>${data.page.title}</h1>
                        <h2>${data.page.meta.description}</h2>
                        <h3>IP: ${data.ip}</h3>
                    </hero>
                </v_page>
            </body>
            </html>
        `);
};
