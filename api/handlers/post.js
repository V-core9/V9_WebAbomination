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
      const pagination = parseInt(req.params.page) || 0;
      const data = await prisma.post.findMany({ skip: 10 * pagination, take: 10, orderBy: { createdAt: 'desc' } });
      return res.status(200).json(data);
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
      const data = await prisma.post.delete({ where: { id: parseInt(req.params.id) } });
      return res.status(200).json(data);
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
