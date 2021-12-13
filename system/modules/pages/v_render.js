const { geoip_check, bot_check } = require('../../helpers');
const config = require('../../config');
const v_pages = require('.');
const { ssr, spa } = require('./render');


module.exports = async (req, res, name) => {



    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    var data = {
        name: name,
        page: await v_pages.get_single(name),
        ts: Date.now(),
        ip: ip,
        lookup: await geoip_check(ip),
        bot: await bot_check(req.headers['user-agent']),
        _req_headers: req.headers
    };

    /*
    if (data.bot === true && config.bot_ssr_render === true) {
        //console.log(`SSR Page [ ${data.page_name} ] Load.`);
        ssr(req, res, data);
    } else {
        //console.log(`SPA Page [ ${data.page_name} ] Load.`);
        spa(req, res, data);
    }
    */
   ssr(req, res, data);
};
