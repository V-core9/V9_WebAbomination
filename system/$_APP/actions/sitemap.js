const vDB = require('v_database');

const sitemap_style = '/style/XSL/sitemap.xsl';

single_url_string = async (url, lastmod, changefreq, priority) => {
    return `<url><loc>https://v-core9.com${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority></url>`;
};

module.exports = async (req, res) => {
    var type = (req.params.map_name !== undefined) ? req.params.map_name : 'index';
    type = type.replace('.xml', '');

    var resp = '<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="//' + req.headers.host + sitemap_style + '"?>';

    if (type === 'index') {
        const sitemaps = await vDB.type.view();
        resp += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < sitemaps.length; i++) {
            resp += '<sitemap><loc>https://v-core9.com/sitemap/' + sitemaps[i] + '.xml</loc></sitemap>';
        }
        resp += `</sitemapindex>`;
    } else {
        const items = await vDB.item.view(type);
        resp += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < items.length; i++) {
            const page = await vDB.item.view(type, items[i]);
            resp += await single_url_string(page.path, '2021-12-12', 'monthly', '1');

            if (page.alt_paths !== undefined) {
                for (let j = 0; j < page.alt_paths.length; j++) {
                    resp += await single_url_string(page.alt_paths[j], '2021-12-12', 'monthly', '0.8');
                }
            }
        }
        resp += `</urlset>`;
    }
    res.setHeader('Content-Type', 'text/xml');
    res.end(resp);
};

