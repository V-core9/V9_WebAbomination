const vWebsite = require('./v_website');
const config = require('./config');

const { auth, api_root, dataModel, logout, register, login, systemStats } = require('./core');
const { verify_jwt, verify_admin, refreshAccessToken } = auth;

const { sitemapGenerator } = require('./modules');
const { cookieJWT } = require('./middlewares');

const routes = {
    "/": {
        get: [vWebsite.index],
    },

    "/application": {
        get: [cookieJWT, verify_jwt, vWebsite.application],
    },

    "/dashboard": {
        get: [cookieJWT, verify_jwt, verify_admin, vWebsite.dashboard],
    },

    //? [ AUTH ]>- - - - - -
    [config.api_v1 + '/auth/register']: {
        post: [register]
    },
    [config.api_v1 + '/auth/login']: {
        post: [login]
    },
    [config.api_v1 + '/auth/logout']: {
        post: [logout]
    },
    [config.api_v1 + '/auth/token']: {
        post: [refreshAccessToken]
    },

    [config.api_root]: {
        get: [api_root],
    },

    [config.api_v1]: {
        get: [verify_jwt, dataModel.list],
        post: [verify_jwt, verify_admin, dataModel.mk_type],
        delete: [verify_jwt, verify_admin, dataModel.rm_type],
    },

    [config.api_v1 + '/:type']: {
        get: [verify_jwt, dataModel.all],
        post: [verify_jwt, dataModel.mk],
    },

    [config.api_v1 + '/:type/:name']: {
        get: [verify_jwt, dataModel.one],
        put: [verify_jwt, dataModel.up],
        delete: [verify_jwt, dataModel.rm],
    },

    "/blog/": {
        get: [vWebsite.blog],
    },

    "/authors/": {
        get: [vWebsite.authors_page],
    },

    "/author/:author_slug": {
        get: [vWebsite.authorBySlug],
    },

    "/:page_slug": {
        get: [vWebsite.pageBySlug],
    },

    "/blog/:post_slug": {
        get: [vWebsite.postBySlug],
    },

    "/page_id/:page_id": {
        get: [vWebsite.pageByID],
    },

    "/post_id/:page_id": {
        get: [vWebsite.postByID],
    },

    "/admin/regenerate_sitemap": {
        get: [cookieJWT, verify_jwt, verify_admin, sitemapGenerator.regenerate],
    },

    "/admin/system_stats": {
        get: [verify_jwt, verify_admin, systemStats],
    },

    "*": {
        get: [vWebsite.e404],
    }
};

module.exports = routes;

console.log(routes);
