const { geoip_check, bot_check } = require('../../helpers');
const config = require('../../config');
const v_pages = require('.');
const v_cache = require('../v_cache');

module.exports = async (req, res, name) => {

    var cache_item = await v_cache.get(name);

    if (cache_item !== false ? await v_cache.cache_time_check(cache_item) : true) {
        await v_cache.save(name, await v_pages.one(config.tables.authors, name));
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

    console.log(data);

    res.end(`
        <!DOCTYPE html>
            <html lang="${config.lang}">
            ${await v_pages.render.head(data)}
            <body>
            <v_page> 
            ${(data.bot === true && config.bot_ssr_render === true || config.forced_ssr_render === true) ? await v_pages.render.page(req, res, data) : ''}

            </v_page>
                
            <script type="text/javascript" src="/js/v_app.js"></script>
            <script defer src='/cf_beacon.min.js' data-cf-beacon='{"token": "f7f9e2ed989846079d9c494b70e87bb0"}'></script>
            </body>
            </html>
        `);
};
