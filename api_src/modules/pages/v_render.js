const config = require('../../config');
const render_head = require('./render/head');

render404 = (pathway) => {
    return `
    <error>
        <header>ERROR: <span>404</span></header>
        <subtitle>Description: <span>Unknown URL Navigation Error</span> </subtitle>
        <path>PATH: <span>${pathway}</span></path>
        <button>Send Report</button>
        <date>Time Of Visit: ${Date.now()}</date>
    </error>
    <style>
        v_page error {
            display: flex;
            flex-direction: column;
            padding: 1em;
            gap: 1em;
            border: 1em solid #203040;
            box-shadow: 0 10px 50px -20px black;
        }

        v_page error header {
            font-size: 3em;
            font-weight: bold;
            padding: .25em;
        }

        v_page error header span {
            color: #ff5722;
        }

        v_page error > * {
            font-size: 1.5em;
            display: flex;
            flex-direction: column;
            gap: .5em;
            border: 1px solid #203040;
            padding: .25em .5em;
        }

        v_page error path span {
            font-size: .75em;
            color: #607d8b;
        }

        v_page error subtitle span {
            font-size: 0.75em;
            color: #607d8b;
        }

        v_page error > date {
            font-size: 0.5em;
            padding: 0;
            color: #607d8b;
            border: none;
            text-align: right;
        }
    </style>
`;
};


module.exports = async (req, res, page_data) => {

    const data = {
        config: config,
        page: page_data,
        ts: Date.now(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        lookup: req.geoip,
        bot: req.isBot,
        _req_headers: req.headers
    };

    res.status((page_data === false) ? 404 : 200).send(`
        <!DOCTYPE html>
            <html lang="${config.lang}">
                ${await render_head(data)}
                <body>
                    <v_page> 
                    ${(page_data === false) ? render404(req.url) : ''}
                    </v_page>
                        
                    <script type="text/javascript" src="/js/v_app.js"></script>
                    <script defer src='/cf_beacon.min.js' data-cf-beacon='{"token": "f7f9e2ed989846079d9c494b70e87bb0"}'></script>
                </body>
            </html>
        `);
};
