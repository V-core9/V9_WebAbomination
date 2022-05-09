const fs = require('fs');
const path = require('path');


module.exports = [


  /*
  * #1 page  [ HOMEPAGE ]
  */
  {
    slug: 'home',
    title: 'V-core9 - Welcome to Homepage',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './homepage.html'), 'utf8'),
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Public', slug: "public" },
          where: { slug: "public" },
        },
        {
          create: { title: 'Welcome', slug: "welcome" },
          where: { slug: "welcome" },
        },
        {
          create: { title: 'Home', slug: "home" },
          where: { slug: "home" },
        },
        {
          create: { title: 'Packages', slug: "packages" },
          where: { slug: "packages" },
        },
        {
          create: { title: 'Node.js', slug: "node.js" },
          where: { slug: "node.js" },
        },
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
      ],
    }
  },


  /*
  * #2 page [ ABOUT US ]
  */
  {
    slug: 'about-us',
    title: 'V-core9 - About Us Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './about-us.html'), 'utf8'),
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Coding', slug: "contact" },
          where: { slug: "contact" },
        },
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
        {
          create: { title: 'Tutorials', slug: "tutorials" },
          where: { slug: "tutorials" },
        },
        {
          create: { title: 'Packages', slug: "packages" },
          where: { slug: "packages" },
        },
        {
          create: { title: 'Node.js', slug: "node.js" },
          where: { slug: "node.js" },
        },
      ],
    }
  },


  /*
  * #3 page [ CONTACT US ]
  */
  {
    slug: 'contact',
    title: 'Contact Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'Contact, Message, Signal, Ask Question, V-core9',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './contact.html'), 'utf8'),
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Contact', slug: "contact" },
          where: { slug: "contact" },
        },
        {
          create: { title: 'Page', slug: "page" },
          where: { slug: "page" },
        },
        {
          create: { title: 'Message', slug: "message" },
          where: { slug: "message" },
        },
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
      ],
    },
  },


  /*
  * #4 page [ LOGIN ]
  */
  {
    slug: 'login',
    title: 'Promo Login Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'Sign-in, Login, Authentication, Confirmation, V-core9',
    thumbnail: '/images/favicon.png',
    content: "",
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
        {
          create: { title: 'Login', slug: "login" },
          where: { slug: "login" },
        },
        {
          create: { title: 'Authorize', slug: "authorize" },
          where: { slug: "authorize" },
        },
        {
          create: { title: 'Account', slug: "account" },
          where: { slug: "account" },
        },
        {
          create: { title: 'Profile', slug: "profile" },
          where: { slug: "profile" },
        }
      ]
    }
  },


  /*
  * #5 page [ REGISTER ]
  */
  {
    slug: 'register',
    title: 'New User Account Registration Page',
    metaDescription: 'Best page to start your journey with V-core9 and all the wonders it brings.',
    metaKeywords: 'Register, Account, Profile, V-core9, Development, Web, Tools, APIs, JoinUs',
    thumbnail: '/images/favicon.png',
    content: "",
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Register', slug: "register" },
          where: { slug: "register" },
        },
        {
          create: { title: 'Account', slug: "account" },
          where: { slug: "account" },
        },
        {
          create: { title: 'Profile', slug: "profile" },
          where: { slug: "profile" },
        }
      ]
    }
  },


  /*
  * #4 page [ LOGIN ]
  */
  {
    slug: 'promo-login',
    title: 'Promo Login Page',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'Sign-in, Login, Authentication, Confirmation, V-core9',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './login.html'), 'utf8'),
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
        {
          create: { title: 'Login', slug: "login" },
          where: { slug: "login" },
        },
        {
          create: { title: 'Authorize', slug: "authorize" },
          where: { slug: "authorize" },
        },
        {
          create: { title: 'Account', slug: "account" },
          where: { slug: "account" },
        },
        {
          create: { title: 'Profile', slug: "profile" },
          where: { slug: "profile" },
        }
      ]
    }
  },


  /*
  * #5 page [ REGISTER ]
  */
  {
    slug: 'promo-register',
    title: 'Promo New User Account Registration Page',
    metaDescription: 'Best page to start your journey with V-core9 and all the wonders it brings.',
    metaKeywords: 'Register, Account, Profile, V-core9, Development, Web, Tools, APIs, JoinUs',
    thumbnail: '/images/favicon.png',
    content: fs.readFileSync(path.join(__dirname, './register.html'), 'utf8'),
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Register', slug: "register" },
          where: { slug: "register" },
        },
        {
          create: { title: 'Account', slug: "account" },
          where: { slug: "account" },
        },
        {
          create: { title: 'Profile', slug: "profile" },
          where: { slug: "profile" },
        }
      ]
    }
  },


];
