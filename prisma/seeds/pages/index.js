const fs = require('fs');
const path = require('path');

module.exports = [
  //! #1 page  [ HOMEPAGE ]
  {
    slug: 'home',
    title: 'V-core9 - Welcome to Homepage',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './homepage.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },

  //! #2 page [ ABOUT US ]
  {
    slug: 'about-us',
    title: 'V-core9 - About Us Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './about-us.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },

  //! #3 page [ CONTACT US ]
  {
    slug: 'contact-us',
    title: 'V-core9 - Contact Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'Contact, Message, Signal, Ask Question, V-core9',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './contact-us.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },

  //! #4 page [ LOGIN ]
  {
    slug: 'login',
    title: 'V-core9 - Contact Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'Sign-in, Login, Authentication, Confirmation, V-core9',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './login.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },

  //! #5 page [ REGISTER ]
  {
    slug: 'register',
    title: 'V-core9 - New User Account Registration Page',
    metaDescription: 'Best page to start your journey with V-core9 and all the wonders it brings.',
    metaKeywords: 'Register, Account, Profile, V-core9, Development, Web, Tools, APIs, JoinUs',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './register.html'), 'utf8'),
    renderMode: 'html',
    published: true
  },

];
