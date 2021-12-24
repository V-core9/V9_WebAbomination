const v_database = require('v_database');
const v_cache = require('./v_cache');

const actions = require('./actions');

page_render = async (res, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
};

const vPage = {
    root: async (req, res) => {
        page_render(res, `<h2>index</h2>`);
    },
    page: async (req, res) => {
        var cache_item = await v_cache.get(req.params.name);
        
        if (Date.now() - (cache_item !== false ? cache_item.time : 0) > v_cache.refresh_time) {
            var page = JSON.stringify(await v_database.item.view('pages', req.params.name), true, 4);
            await v_cache.save(req.params.name, `<h2>PATH: ${req.params.name}</h2><pre>${page}</pre>`);
        } 
        page_render(res, (await v_cache.get(req.params.name)).value);

    },
    sitemap: async (req, res) => {
        await actions.sitemap(req, res);
    },
    $404: async (req, res) => {
        page_render(res, '<h2>NOT FOUND : 404</h2><h3>PATH: ' + req.path + '</h3>');
    },
};

module.exports = vPage;
