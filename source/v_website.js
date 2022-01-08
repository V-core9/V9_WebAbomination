const vDB = require('v_database');
const v_render = require('./modules/pages/v_render');

const vWebsite = {

    post_types: [ 'authors', 'pages', 'posts'],
    
    load: async () => {
        for (let j = 0; j < vWebsite.post_types.length; j++) {
            var hType = vWebsite.post_types[j];
            vWebsite[hType] = [];
            var helper = await vDB.item.view(hType);
            for (let i = 0; i < helper.length; i++) {
                vWebsite[hType].push( await vDB.item.view(hType, helper[i]));
            }
        }
    },

    //? Homepage
    index: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'index')) ;
    },

    //? Blog Page
    blog: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'blog')) ;
    },

    //? Authors Page
    authors_page: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.pages, 'authors')) ;
    },

    //? Find any by path/slug [alt_paths]
    //* returns object or false
    findByPath: async(itemList, itemPath) => {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].path === itemPath || itemList[i].alt_paths.indexOf(itemPath) > -1) {
                return itemList[i];
            }
        }
        return false;
    },

    //? Find any by id [tries directly to load from db]
    pageByID: async (req, res) => {
        res.send(await vDB.item.view('pages', req.params.page_id));
    },
    //? Find page by slug 
    pageBySlug: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.pages, req.params.page_slug)) ;
    },

    //? Find post by id  [direct DB load]
    postByID: async (req, res) => {
        res.send(await vDB.item.view('posts', req.params.post_id));
    },
    //? Find post by slug [path/alt_paths]
    postBySlug: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.posts, req.params.post_slug)) ;
    },

    //? Find author by id  [direct DB load]
    authorByID: async (req, res) => {
        res.send(await vDB.item.view('authors', req.params.post_id));
    },
    //? Find author by slug [path/alt_paths]
    authorBySlug: async (req, res) => {
        v_render(req, res, await vWebsite.findByPath(vWebsite.authors, req.params.author_slug)) ;
    },

    sitemap: async (req, res) => {
        res.send('sitemap');
    },

    //? 404
    e404: async (req, res) => {
        v_render(req, res, false) ;
    }
};

module.exports = vWebsite;
