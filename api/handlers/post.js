const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//!------------------------
//? POSTS - Handlers
//* 1. list
//* 2. byId
//* 3. create
//* 4. update
//* 5. delete
//* 6. purge
//!------------------------

module.exports = post = {


  /*
  * Listing Posts
  */
  list: async (req, res) => {
    try {
      const params = {
        skip: 0,
        take: 5,
        orderBy: { id: 'asc' },
        include: { tags: true }
      };

      if (!isNaN(req.params.perPage)) params.take = parseInt(req.params.perPage);
      if (!isNaN(req.params.page)) params.skip = (parseInt(req.params.page || 0) - 1) * params.take;
      if (params.skip < 0) params.skip = 0;

      const posts = await prisma.post.findMany(params);
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Get Post By ID
  */
  byId: async (req, res) => {
    try {
      const data = await prisma.post.findUnique({ where: { id: parseInt(req.params.id) } });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },

  /*
  * Get Post By SLUG
  */
  bySlug: async (req, res) => {
    try {
      const data = await prisma.post.findUnique({ where: { slug: req.params.slug } });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Create New Post
  */
  create: async (req, res) => {
    try {
      const data = await prisma.post.create({ data: req.body });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Update Handler
  */
  update: async (req, res) => {
    try {
      const data = await prisma.post.update({ where: { id: parseInt(req.params.id) }, data: req.body });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Delete/Remove Post
  */
  delete: async (req, res) => {
    try {
      return res.status(200).json(await prisma.post.delete({ where: { id: parseInt(req.params.id) } }));
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * PURGE POSTS Handler
  */
  purge: async (req, res) => {
    try {
      const data = await prisma.post.deleteMany();
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


};
