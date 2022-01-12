const vDB = require('v_database');
const v_render = require('./modules/pages/v_render');

const vWebsite = {

    post_types: ['authors', 'pages', 'posts'],

    load: async () => {
        for (let j = 0; j < vWebsite.post_types.length; j++) {
            var hType = vWebsite.post_types[j];
            vWebsite[hType] = [];
            var helper = await vDB.item.view(hType);
            for (let i = 0; i < helper.length; i++) {
                vWebsite[hType].push(await vDB.item.view(hType, helper[i]));
            }
        }
    },

    //? Find any by path/slug [alt_paths]
    //* returns object or false
    findByPath: async (itemList, itemPath) => {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].path === itemPath || itemList[i].alt_paths.indexOf(itemPath) > -1) {
                return itemList[i];
            }
        }
        return false;
    },

};


//? Homepage
vWebsite.index = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'index'));
};

//? Blog Page
vWebsite.blog = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'blog'));
};

//? Authors Page
vWebsite.authors_page = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'authors'));
};

//? Find page by slug 
vWebsite.pageBySlug = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.pages, req.params.page_slug));
};

//? Find post by slug [path/alt_paths]
vWebsite.postBySlug = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.posts, req.params.post_slug));
};

//? Find author by slug [path/alt_paths]
vWebsite.authorBySlug = async (req, res) => {
    v_render(req, res, await vWebsite.findByPath(vWebsite.authors, req.params.author_slug));
};

vWebsite.sitemap = async (req, res) => {
    res.send('sitemap');
};

//? 404
vWebsite.e404 = async (req, res) => {
    req.errorCode = 404;
    v_render(req, res, false);
};

vWebsite.errorPage = async (req, res) => {
    v_render(req, res, false);
};

//? Application
vWebsite.application = async (req, res) => {
    v_render(req, res, await vDB.item.view('v9_system_pages', 'application'));
};

//? Dashboard
vWebsite.dashboard = async (req, res) => {
    v_render(req, res, await vDB.item.view('v9_system_pages', 'dashboard'));
};


//! FOR DEBUG MODE ]>= = = = = = = = = = 
//? Find any by id [tries directly to load from db]
vWebsite.pageByID = async (req, res) => {
    res.send(await vDB.item.view('pages', req.params.page_id));
};

//? Find author by id  [direct DB load]
vWebsite.authorByID = async (req, res) => {
    res.send(await vDB.item.view('authors', req.params.post_id));
};

//? Find post by id  [direct DB load]
vWebsite.postByID = async (req, res) => {
    res.send(await vDB.item.view('posts', req.params.post_id));
};

module.exports = vWebsite;
