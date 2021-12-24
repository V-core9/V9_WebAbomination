const v_database = require('v_database');
const v_cache = require('./v_cache');

const sitemap_style = '/style/XSL/sitemap.xsl';


single_url_string = async (url, lastmod, changefreq, priority) => {
    return `<url><loc>https://v-core9.com${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority></url>`;
};

const generate_sitemap = async (req, res, type) => {
    var in_type = (typeof type === 'undefined') ? 'index' : type;

    var cache_item  = await v_cache.findByName(type);

    var resp = '<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="//'+req.headers.host+sitemap_style+'"?>';

    if (cache_item !== false ? await v_cache.cache_time_check(cache_item) : true) {
        
        if (in_type === 'index') {

            const sitemaps = await v_database.item.view('sys_sitemaps');
            resp += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
            for (let i = 0; i < sitemaps.length; i++) {
                const sitemap = await v_database.item.view('sys_sitemaps', sitemaps[i]);
                resp += '<sitemap><loc>https://v-core9.com' + sitemap.path + '</loc></sitemap>';
            }
            resp += `</sitemapindex>`;

        } else {

            const pages = await v_database.item.view(type);
            resp += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
            for (let i = 0; i < pages.length; i++) {
                const page = await v_database.item.view(type, pages[i]);
                resp += await single_url_string(page.path, '2021-12-12', 'monthly', '1');

                for (let j = 0; j < page.alt_paths.length; j++) {
                    resp += await single_url_string(page.alt_paths[j], '2021-12-12', 'monthly', '0.8');
                }
            }
            resp += `</urlset>`;

        }

        v_cache.newItem(in_type, {string: resp, lastUpdate: Date.now()});
        res.setHeader('Content-Type', 'text/xml');
        res.end(resp);
    } else {
        resp = await v_cache.findByName(in_type);
        res.setHeader('Content-Type', 'text/xml');
        res.end(resp.string);
    }

};

module.exports = generate_sitemap;
