const { geoip_check, bot_check } = require('../../helpers');
const config = require('../../config');
const v_pages = require('.');
const { ssr, spa } = require('./render');


module.exports = async (req, res, data) => {
    data.page = await v_pages.get(data.page_name);
    
    data.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    data.ts = Date.now();
    data.lookup = await geoip_check(data.ip);
    data.bot = await bot_check(req.headers['user-agent']);
    data.config = config;
    data._req_headers = req.headers;

    if (data.bot === true) {
        console.log(`SSR Page [ ${data.page_name} ] Load.`);
        ssr(req, res, data);
    } else {
        console.log(`SPA Page [ ${data.page_name} ] Load.`);
        spa(req, res, data);
    }
};
