const vWebsite = require('./v_website');
const config = require('./config');

const { auth, api_root, dataModel, logout, register, login, systemStats } = require('./core');
const { verify_jwt, verify_admin } = auth;

const { sitemapGenerator } = require('./modules');


const routes = [
    {
        type: 'get',
        path: '/application',
        handle: [verify_jwt, vWebsite.application]
    },
    {
        type: 'get',
        path: '/dashboard',
        handle: [verify_jwt, verify_admin, vWebsite.dashboard]
    },
    // API ROOT
    {
        type: 'get',
        path: config.api_root,
        handle: [api_root]
    },
    //? [ TYPES ]>- - - - - -
    {
        type: 'get',
        path: config.api_v1,
        handle: [verify_jwt, dataModel.list]
    },
    {
        type: 'post',
        path: config.api_v1,
        handle: [verify_jwt, verify_admin, dataModel.mk_type]
    },
    {
        type: 'delete',
        path: config.api_v1,
        handle: [verify_jwt, verify_admin, dataModel.rm_type]
    },
    //! EOF_TYPES
    //? [ AUTH ]>- - - - - -
    {
        type: 'post',
        path: config.api_v1 + '/auth/register',
        handle: [register]
    },
    {
        type: 'post',
        path: config.api_v1 + '/auth/login',
        handle: [login]
    },
    {
        type: 'post',
        path: config.api_v1 + '/auth/logout',
        handle: [logout]
    },
    {
        type: 'post',
        path: config.api_v1 + '/auth/token',
        handle: [auth.refreshAccessToken]
    },
    //! EOF_AUTH
    //? [ ITEMS ]>- - - - - -
    {
        type: 'get',
        path: config.api_v1 + '/:type',
        handle: [verify_jwt, dataModel.all]
    },
    {
        type: 'post',
        path: config.api_v1 + '/:type',
        handle: [verify_jwt, dataModel.mk]
    },
    {
        type: 'get',
        path: config.api_v1 + '/:type/:name',
        handle: [verify_jwt, dataModel.one]
    },
    {
        type: 'put',
        path: config.api_v1 + '/:type/:name',
        handle: [verify_jwt, dataModel.up]
    },
    {
        type: 'delete',
        path: config.api_v1 + '/:type/:name',
        handle: [verify_jwt, dataModel.rm]
    },
    //! EOF_ITEMS
    {
        type: 'get',
        path: '/',
        handle: [vWebsite.index]
    },
    {
        type: 'get',
        path: '/blog/',
        handle: [vWebsite.blog]
    },
    {
        type: 'get',
        path: '/authors/',
        handle: [vWebsite.authors_page]
    },
    {
        type: 'get',
        path: '/:page_slug',
        handle: [vWebsite.pageBySlug]
    },
    {
        type: 'get',
        path: '/blog/:post_slug',
        handle: [vWebsite.postBySlug]
    },
    {
        type: 'get',
        path: '/author/:author_slug',
        handle: [vWebsite.authorBySlug]
    },
    {
        type: 'get',
        path: '/page_id/:page_id',
        handle: [vWebsite.pageByID]
    },
    {
        type: 'get',
        path: '/post_id/:post_id',
        handle: [vWebsite.postByID]
    },
    {
        type: 'get',
        path: '/admin/regenerate_sitemap',
        handle: [verify_jwt, verify_admin, sitemapGenerator.regenerate]
    },
    {
        type: 'get',
        path: '/admin/system_stats',
        handle: [verify_jwt, verify_admin, systemStats]
    },
    {
        type: 'get',
        path: '*',
        handle: [vWebsite.e404]
    },
];

module.exports = routes;
