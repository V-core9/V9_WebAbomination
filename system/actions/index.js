const v_render = require('../modules/pages/v_render');
const generate_sitemap = require('./generate_sitemap');
const blog_post = require('./blog_post');

const v_action = {
    blog: async (req, res) => {
        v_render(req, res, 'blog', 'pages');
    },
    authors: async (req, res) => {
        v_render(req, res, 'authors', 'pages');
    },
    index: async (req, res) => {
        v_render(req, res, 'index', 'pages');
    },
    about: async (req, res) => {
        v_render(req, res, 'about', 'pages');
    },
    contact: async (req, res) => {
        v_render(req, res, 'contact', 'pages');
    },
    login: async (req, res) => {
        v_render(req, res, 'login', 'pages');
    },
    privacy_policy: async (req, res) => {
        v_render(req, res, 'privacy_policy', 'pages');
    },
    terms_policy: async (req, res) => {
        v_render(req, res, 'terms_policy', 'pages');
    },
    register: async (req, res) => {
        v_render(req, res, 'register', 'pages');
    },
    system_status: async (req, res) => {
        v_render(req, res, 'system_status', 'pages');
    },
    statistics: async (req, res) => {
        v_render(req, res, 'statistics', 'pages' );
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
    blog_post: blog_post,
    lightmap: async (req, res) => {
        v_render(req, res, 'lightmap', 'pages');
    },
    v9_Ana: async (req, res) => {
        v_render(req, res, 'v9_Ana', 'authors');
    },
    'v-core9': async (req, res) => {
        v_render(req, res, 'v-core9', 'authors');
    },
    v9_admin: async (req, res) => {
        v_render(req, res, 'v9_admin', 'authors');
    },

};

module.exports = v_action;
