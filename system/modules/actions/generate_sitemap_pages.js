const v_database = require('v_database');

var sitemap = {
    string: '',
    cacheTime: 100,
    lastUpdate: 0
};

single_url_string = async (url, lastmod, changefreq, priority) => {
    return `<url><loc>https://v-core9.com${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority></url>`;
};

const generate_sitemap_pages = async (req, res) => {

    if (sitemap.cacheTime < Date.now() - sitemap.lastUpdate) {
        const pages = await v_database.type.view('pages');


        var resp = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        for (let i = 0; i < pages.length; i++) {
            const page = await v_database.item.view('pages', pages[i]);
            resp += await single_url_string(page.path, '2021-12-12', 'monthly', '1');

            for (let j = 0; j < page.alt_paths.length; j++) {
                resp += await single_url_string(page.alt_paths[j], '2021-12-12', 'monthly', '0.8');
            }
        }
        resp += `</urlset>`;
        sitemap.string = resp;
    }
    
    sitemap.lastUpdate = Date.now();
    res.setHeader('Content-Type', 'text/xml');
    res.end(sitemap.string);
};

module.exports = generate_sitemap_pages;
