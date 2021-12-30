const v_render = require('../modules/pages/v_render');
const generate_sitemap = require('./generate_sitemap');
const blog_post = require('./blog_post');

const v_action = {
    blog: async (req, res) => {
        v_render(req, res, 'blog');
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
        generate_sitemap(req, res, 'pages');
    },
    sitemap_posts: async (req, res) => {
        generate_sitemap(req, res, 'posts');
    },
    sitemap_authors: async (req, res) => {
        generate_sitemap(req, res, 'authors');
    },
    blog_post: blog_post,
};

module.exports = v_action;
