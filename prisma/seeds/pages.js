const fs = require('fs');
const path = require('path');

module.export = [
  {
    slug:  'home',
    title: 'V-core9 - Welcome to Homepage',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './pages/homepage.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },
  {
    slug:  'about-us',
    title: 'V-core9 - About Us Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './pages/about-us.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },
  {
    slug:  'contact-us',
    title: 'V-core9 - Contact Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './pages/contact-us.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },
];
