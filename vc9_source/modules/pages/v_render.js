const { geoip_check, bot_check } = require('../../helpers');
const config = require('../../config');
const render_head = require('./render/head');

module.exports = async (req, res, page_data) => {
    if (page_data === false) {
        res.status(404).send('404');
        return false;
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    var data = {
        config: config,
        page: page_data,
        ts: Date.now(),
        ip: ip,
        lookup: await geoip_check(ip),
        bot: await bot_check(req.headers['user-agent']),
        _req_headers: req.headers
    };

    const head = await render_head(data);
    console.log(head);

    res.end(`
        <!DOCTYPE html>
            <html lang="${config.lang}">
                ${head}
                <body>

                    <v_page> 
                    </v_page>
                        
                    <script type="text/javascript" src="/js/v_app.js"></script>
                    <script defer src='/cf_beacon.min.js' data-cf-beacon='{"token": "f7f9e2ed989846079d9c494b70e87bb0"}'></script>
                
                </body>
            </html>
        `);
};
