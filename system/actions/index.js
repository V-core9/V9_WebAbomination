const v_render = require('../modules/pages/v_render');
const generate_sitemap = require('./generate_sitemap');
const blog_post = require('./blog_post');

const v_action = {
    blog: async (req, res) => {
        v_render(req, res, 'blog');
    },
    authors: async (req, res) => {
        v_render(req, res, 'authors');
    },
    index: async (req, res) => {
        v_render(req, res, 'index');
    },
    about: async (req, res) => {
        v_render(req, res, 'about');
    },
    contact: async (req, res) => {
        v_render(req, res, 'contact');
    },
    login: async (req, res) => {
        v_render(req, res, 'login');
    },
    privacy_policy: async (req, res) => {
        v_render(req, res, 'privacy_policy');
    },
    terms_policy: async (req, res) => {
        v_render(req, res, 'terms_policy');
    },
    register: async (req, res) => {
        v_render(req, res, 'register');
    },
    system_status: async (req, res) => {
        v_render(req, res, 'system_status');
    },
    statistics: async (req, res) => {
        v_render(req, res, 'statistics' );
    },
    sitemap: async (req, res) => {
        generate_sitemap(req, res);
    },
    sitemap_pages: async (req, res) => {
        generate_sitemap(req, res);
    },
    sitemap_posts: async (req, res) => {
        generate_sitemap(req, res);
    },
    sitemap_authors: async (req, res) => {
        generate_sitemap(req, res);
    },

    blog_post: blog_post,

    lightmap: async (req, res) => {
        v_render(req, res, 'lightmap');
    },

    ana_v9: async (req, res) => {
        v_render(req, res, 'ana_v9');
    },

    '-v-': async (req, res) => {
        v_render(req, res, '-v-');
    },

    DjM_GM: async (req, res) => {
        v_render(req, res, 'DjM_GM');
    },

};

module.exports = v_action;
