const vTables = require('../config/tables');

const vSeeds = [
    {
        table: vTables.pages,
        name: 'index',
        content: './pages/index.json'
    },
    {
        table: vTables.pages,
        name: 'about',
        content: './pages/about.json'
    },
    {
        table: vTables.pages,
        name: 'login',
        content: './pages/login.json'
    },
    {
        table: vTables.pages,
        name: 'register',
        content: './pages/register.json'
    },
    {
        table: vTables.pages,
        name: 'contact',
        content: './pages/contact.json'
    },
    {
        table: vTables.pages,
        name: 'statistics',
        content: './pages/statistics.json'
    },
    {
        table: vTables.pages,
        name: 'system_status',
        content: './pages/system_status.json'
    },
    {
        table: vTables.pages,
        name: 'sitemap',
        content: './pages/sitemap.json'
    },
    {
        table: vTables.pages,
        name: 'sitemap_pages',
        content: './pages/sitemap_pages.json'
    },
    {
        table: vTables.pages,
        name: 'sitemap_posts',
        content: './pages/sitemap_posts.json'
    },
    {
        table: vTables.pages,
        name: 'privacy_policy',
        content: './pages/privacy_policy.json'
    },
    {
        table: vTables.pages,
        name: 'terms_policy',
        content: './pages/terms_policy.json'
    },
    {
        table: vTables.pages,
        name: 'blog',
        content: './pages/blog.json'
    },
    {
        table: vTables.sitemaps,
        content: './sitemaps/authors.json'
    },
    {
        table: vTables.sitemaps,
        content: './sitemaps/pages.json'
    },
    {
        table: vTables.sitemaps,
        content: './sitemaps/posts.json'
    }
];

module.exports = vSeeds;
