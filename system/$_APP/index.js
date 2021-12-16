const v_database = require('v_database');

page_render = async(res, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
};

const vPage = {
    root: async (req, res) => {
        page_render(res, `<h2>index</h2>`);
    },
    page: async (req, res) => {
        var page = JSON.stringify(await v_database.item.view('pages', req.params.name ), true, 4);
        page_render(res, `<h2>PATH: ${req.params.name}</h2><pre>${page}</pre>`);
    },
    $404: async (req, res) => {
        page_render(res, '<h2>NOT FOUND : 404</h2><h3>PATH: ' + req.path + '</h3>');
    }
};

module.exports = vPage;
