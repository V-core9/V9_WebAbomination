const vDB = require('v_database');
const v_render = require('./modules/pages/v_render');

const vWebsite = {

    //? Actual Data after load
    pages: [],
    posts: [],
    authors: [],

    //? Loads all data from the database
    loadPages: async() => {
        var pages = await vDB.item.view('pages');
        for (let i = 0; i < pages.length; i++) {
            vWebsite.pages.push(await vDB.item.view('pages', pages[i]));
        }
    },
    loadPosts: async() => {
        var posts = await vDB.item.view('posts');
        for (let i = 0; i < posts.length; i++) {
            vWebsite.posts.push(await vDB.item.view('posts', posts[i]));
        }
    },
    loadAuthors: async() => {
        var authors = await vDB.item.view('authors');
        for (let i = 0; i < authors.length; i++) {
            vWebsite.authors.push(await vDB.item.view('authors', authors[i]));
        }
    },

    load: async () => {
        await vWebsite.loadPages();
        await vWebsite.loadPosts();
        await vWebsite.loadAuthors();
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
