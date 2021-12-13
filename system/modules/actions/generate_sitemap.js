const v_database = require('v_database');

var sitemap = {
    string: '',
    cacheTime: 200,
    lastUpdate: 0
};
const generate_sitemap = async (req, res) => {

    if (sitemap.cacheTime < Date.now() - sitemap.lastUpdate) {
        const pages = await v_database.type.view('pages');


        var resp = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        for (let i = 0; i < pages.length; i++) {
            const page = await v_database.item.view('pages', pages[i]);
            resp += '<url><loc>https://v-core9.com' + page.path + '</loc>';
            resp += '<lastmod>20021-12-12</lastmod>';
            resp += '<changefreq>monthly</changefreq>';
            resp += '<priority>1</priority></url>';

            page.alt_paths.forEach((alt_path) => {
                resp += '<url><loc>https://v-core9.com' + alt_path + '</loc>';
                resp += '<lastmod>20021-12-12</lastmod>';
                resp += '<changefreq>monthly</changefreq>';
                resp += '<priority>0.8</priority></url>';
            });
        }
        resp += `</urlset>`;
        sitemap.string = resp;
    }
    
    sitemap.lastUpdate = Date.now();
    res.setHeader('Content-Type', 'text/xml');
    res.end(sitemap.string);
};

module.exports = generate_sitemap;
