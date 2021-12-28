const { geoip_check, bot_check } = require('../../helpers');
const config = require('../../config');
const v_pages = require('.');
const { render_page, render_head } = require('./render');
const v_cache = require('../v_cache');

module.exports = async (req, res, name) => {


    var cache_item = await v_cache.get(name);
    if (cache_item !== false ? await v_cache.cache_time_check(cache_item) : true) {
        await v_cache.save(name, await v_pages.get_single(name));
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    var data = {
        config: config,
        name: name,
        page: (await v_cache.get(name)).data,
        ts: Date.now(),
        ip: ip,
        lookup: await geoip_check(ip),
        bot: await bot_check(req.headers['user-agent']),
        _req_headers: req.headers
    };



    res.end(`
        <!DOCTYPE html>
            <html lang="${config.lang}">
            ${await render_head(data)}
            <body>
            <v_page> 
            ${(data.bot === true && config.bot_ssr_render === true || config.forced_ssr_render === true) ? await render_page(req, res, data) : ''}

            </v_page>
                
            <script type="text/javascript" src="/js/v_app.js"></script>
            </body>
            </html>
        `);
};
