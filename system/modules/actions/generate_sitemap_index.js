const v_database = require('v_database');

var sitemap = {
    string: '',
    cacheTime: 100,
    lastUpdate: 0
};
const generate_sitemap_index = async (req, res) => {

    if (sitemap.cacheTime < Date.now() - sitemap.lastUpdate) {
        const sitemaps = await v_database.type.view('sys_sitemaps');


        var resp = '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        for (let i = 0; i < sitemaps.length; i++) {
            const sitemap = await v_database.item.view('sys_sitemaps', sitemaps[i]);
            resp += '<sitemap><loc>https://v-core9.com' + sitemap.path + '</loc></sitemap>';
        }
        resp += `</sitemapindex>`;
        sitemap.string = resp;
    }
    
    sitemap.lastUpdate = Date.now();
    res.setHeader('Content-Type', 'text/xml');
    res.end(sitemap.string);
};

module.exports = generate_sitemap_index;
