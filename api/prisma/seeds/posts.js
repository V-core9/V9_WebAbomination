module.exports = [


  /*
  * #1 post
  */
  {
    slug: 'the-silent-start',
    title: 'The Silent Start: An Intricate Art of a Deadly Fart!',
    metaDescription: 'V-core9 Starting Point and How to Stay on Top of the Situation while looking confused.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    content: 'The Silent Start: An Intricate Art of a Deadly Fart!',
    thumbnail: '/images/favicon.png',
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
        {
          create: { title: 'Farts', slug: "farts" },
          where: { slug: "farts" },
        },
        {
          create: { title: 'Coding', slug: "coding" },
          where: { slug: "coding" },
        },
      ],
    },
  },


  /*
  * #2 Post
  */
  {
    slug: 'execution-time-when-running-for-vs-foreach',
    title: 'Execution Time Comparison when running [for] vs [foreach].',
    metaDescription: 'Execution Speed comparison of different ways to iterate through the array or object.',
    metaKeywords: 'V-core9, Development, Web, Tools, APIs, Blog, News, Tech, Hire, SEO, Performance',
    content: 'Execution Time Comparison when running [for] vs [foreach].',
    thumbnail: '/images/favicon.png',
    renderMode: 'html',
    published: true,
    tags: {
      connectOrCreate: [
        {
          create: { title: 'Databases', slug: "databases" },
          where: { slug: "databases" },
        },
        {
          create: { title: 'Tutorials', slug: "tutorials" },
          where: { slug: "tutorials" },
        },
      ],
    },
  },


];
