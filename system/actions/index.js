const v_render = require('../modules/pages/v_render');
const v_render_author = require('../modules/pages/v_render_author');
const v_render_post = require('../modules/pages/v_render_post');
const generate_sitemap = require('./generate_sitemap');

const v_action = {
    blog: require('./blog'),

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
        v_render(req, res, 'statistics');
    },

    lightmap: async (req, res) => {
        v_render(req, res, 'lightmap');
    },


    sitemap: async (req, res) => {
        generate_sitemap(req, res);
    },
    sitemap_pages: async (req, res) => {
        generate_sitemap(req, res, 'pages');
    },
    sitemap_posts: async (req, res) => {
        generate_sitemap(req, res, 'posts');
    },
    sitemap_authors: async (req, res) => {
        generate_sitemap(req, res, 'authors');
    },


    ana_v9: async (req, res) => {
        v_render_author(req, res, 'ana_v9');
    },
    '-v-': async (req, res) => {
        v_render_author(req, res, '-v-');
    },
    DjM_GM: async (req, res) => {
        v_render_author(req, res, 'DjM_GM');
    },


    big_opening: async (req, res) => {
        v_render_post(req, res, 'big_opening');
    },
    sample_post: async (req, res) => {
        v_render_post(req, res, 'sample_post');
    },

};

module.exports = v_action;
