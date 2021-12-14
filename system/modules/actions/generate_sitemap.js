const v_database = require('v_database');

const v_cache = {
    _items : {},
    cacheTime : 500,
    findByName: (name) => {
        try {
            var res = v_cache._items[name];
            return (res !== undefined) ? res : false;
        } catch (e) {
            return false;
        }
    },
    newItem: (name, item) => {
        v_cache._items[name] = item;
    },
    clear: () => {
        v_cache._items = {};
    }
};

var sitemap = {
    string: '',
    cacheTime: 10000,
    lastUpdate: 0
};

single_url_string = async (url, lastmod, changefreq, priority) => {
    return `<url><loc>https://v-core9.com${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority></url>`;
};

const generate_sitemap = async (req, res, type) => {
    var resp = '<?xml version="1.0" encoding="UTF-8"?>';
    var in_type = (type !== undefined) ? type : 'index';

        if ( v_cache.cacheTime < Date.now() - ( v_cache.findByName(in_type) !== false ? v_cache.findByName(in_type).lastUpdate : 0 )) {
            const pages = await v_database.type.view(in_type);


            resp += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

            for (let i = 0; i < pages.length; i++) {
                const page = await v_database.item.view(in_type, pages[i]);
                resp += await single_url_string(page.path, '2021-12-12', 'monthly', '1');

                for (let j = 0; j < page.alt_paths.length; j++) {
                    resp += await single_url_string(page.alt_paths[j], '2021-12-12', 'monthly', '0.8');
                }
            }
            resp += `</urlset>`;
            sitemap.lastUpdate = Date.now();
            sitemap.string = resp;
            v_cache.newItem(in_type, sitemap);
        }

    res.setHeader('Content-Type', 'text/xml');
    res.end(v_cache.findByName(in_type).string);
};

module.exports = generate_sitemap;
