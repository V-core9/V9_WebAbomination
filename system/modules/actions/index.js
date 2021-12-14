const v_render = require('../pages/v_render');
const generate_sitemap_index = require('./generate_sitemap_index');
const generate_sitemap_pages = require('./generate_sitemap_pages');
const generate_sitemap = require('./generate_sitemap');
const blog = require('./blog');

const v_action = {
    blog : async (req, res)=> {
        blog ( req, res );
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
    register: async (req, res) => {
        v_render(req, res, 'register');
    },
    system_status: async (req, res) => {
        v_render(req, res, 'system_status');
    },
    terms_policy: async (req, res) => {
        v_render(req, res, 'terms_policy');
    },
    statistics: async (req, res) => {
        v_render(req, res, { page_name: 'statistics' });
    },
    sitemap: async (req, res) => {
        generate_sitemap_index(req, res);
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
};

module.exports = v_action;
