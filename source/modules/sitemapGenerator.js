
const vDB = require('v_database');
const v_sitemap = require('v_sitemap');

const { location } = require('../config/');
const mapType = [
    {
        type: "posts",
        prefix: "blog/",
    },
    {
        type: "authors",
        prefix: "author/",
    },
    {
        type: "pages",
        prefix: "",
    },
];

const sitemapGenerator = {
    generate: async (type, output, index, prefix = '') => {

        const items = await vDB.item.view(type);
        var DEMO_DATA = [];

        for (var i = 0; i < items.length; i++) {
            var item = await vDB.item.view(type, items[i]);
            item.path = location + prefix + item.path;
            DEMO_DATA.push(item);
        }

        //? Example styled map
        const myStyledMap = {
            data: DEMO_DATA,
            index: index,
            output: output,
            stylesheet: "v-core9.com/style/XSL/sitemap.xsl"
        };

        await v_sitemap(myStyledMap);
    },

    index: async () => {
        await sitemapGenerator.generate('sitemaps', "public/sitemap_index.xml", true);
    },

    types: async () => {
        for (var i = 0; i < mapType.length; i++) {
            await sitemapGenerator.generate(mapType[i].type, "public/" + mapType[i].type + "_sitemap.xml", false, mapType[i].prefix);
        }
    },

    regenerate: async (req, res) => {
        await sitemapGenerator.index();
        await sitemapGenerator.types();
        res.send('Sitemap Generate Successfully.');
    }
};

module.exports = sitemapGenerator;
