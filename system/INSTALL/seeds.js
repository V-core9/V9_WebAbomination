const vTables = require('../config/tables');

const vSeeds = [
    
    // Homepage [home/index/root]
    {
        table: vTables.pages,
        name: 'index',
        content: './pages/index.json'
    },
    
    // About us page [static info page]
    {
        table: vTables.pages,
        name: 'about',
        content: './pages/about.json'
    },
    
    // [System] Login Page - [user/admin/login]
    {
        table: vTables.pages,
        name: 'login',
        content: './pages/login.json'
    },
    
    // [System] Register Page - [create new user]
    {
        table: vTables.pages,
        name: 'register',
        content: './pages/register.json'
    },
    
    // Contact us Page - [communication page]
    {
        table: vTables.pages,
        name: 'contact',
        content: './pages/contact.json'
    },
    
    // Statistics Page - [tools in use/number of downloads on npm...etc]
    {
        table: vTables.pages,
        name: 'statistics',
        content: './pages/statistics.json'
    },
    
    // System Status Page -[uptime/memory/cpu]
    {
        table: vTables.pages,
        name: 'system_status',
        content: './pages/system_status.json'
    },
    
    // SITEMAP - INDEX - [List of Sitemaps]
    {
        table: vTables.pages,
        name: 'sitemap',
        content: './pages/sitemap.json'
    },
    
    // SITEMAP - [Static Pages] 
    {
        table: vTables.pages,
        name: 'sitemap_pages',
        content: './pages/sitemap_pages.json'
    },
    
    // SITEMAP - [Blog Posts Listing]
    {
        table: vTables.pages,
        name: 'sitemap_posts',
        content: './pages/sitemap_posts.json'
    },
    
    // SITEMAP - [Authors Listing]
    {
        table: vTables.pages,
        name: 'sitemap_authors',
        content: './pages/sitemap_authors.json'
    },
    
    // Privacy Policy Page
    {
        table: vTables.pages,
        name: 'privacy_policy',
        content: './pages/privacy_policy.json'
    },
    
    // Terms and Conditions Page
    {
        table: vTables.pages,
        name: 'terms_policy',
        content: './pages/terms_policy.json'
    },

    // Blog Root Page [list of posts]
    {
        table: vTables.pages,
        name: 'blog',
        content: './pages/blog.json'
    },

    // Lightmap [list of lighthouse test results]
    {
        table: vTables.pages,
        name: 'lightmap',
        content: './pages/lightmap.json'
    },

    // Authors Root Page [list of authors]
    {
        table: vTables.pages,
        name: 'authors',
        content: './pages/authors.json'
    },


    // SITEMAPS
    {
        table: vTables.sitemaps,
        name: 'sitemap_authors',
        content: './sitemaps/sitemap_authors.json'
    },
    {
        table: vTables.sitemaps,
        name: 'sitemap_pages',
        content: './sitemaps/sitemap_pages.json'
    },
    {
        table: vTables.sitemaps,
        name: 'sitemap_posts',
        content: './sitemaps/sitemap_posts.json'
    },

    // Author pages
    {
        table: vTables.authors,
        name: '-v-',
        content: './authors/-v-.json'
    },
    {
        table: vTables.authors,
        name: 'DjM_GM',
        content: './authors/DjM_GM.json'
    },
    {
        table: vTables.authors,
        name: 'ana_v9',
        content: './authors/ana_v9.json'
    },
    // Users [authors use them]
    {
        table: vTables.users,
        name: '-v-',
        content: './users/-v-.json'
    },
    {
        table: vTables.users,
        name: 'DjM_GM',
        content: './users/DjM_GM.json'
    },
    {
        table: vTables.users,
        name: 'ana_v9',
        content: './users/ana_v9.json'
    },

    // BLOG POSTS
    {
        table: vTables.posts,
        name: "big_opening",
        content: './posts/big_opening.json'
    },
    {
        table: vTables.posts,
        name: "sample_post",
        content: './posts/sample_post.json'
    }
];

module.exports = vSeeds;
