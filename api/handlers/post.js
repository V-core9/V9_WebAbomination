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
    const data = await prisma.post.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
    return res.status(200).json(data);
  },


  /*
  * Get Post By ID
  */
  byId: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.findUnique({ where: { id: id } });
    return res.status(200).json(data);
  },


  /*
  * Create New Post 
  */
  create: async (req, res) => {
    const data = await prisma.post.create(req.body);
    return res.status(200).json(data);
  },


  /*
  * Update Handler 
  */
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.update({ where: { id: id }, data: req.body });
    return res.status(200).json(data);
  },


  /*
  * Delete/Remove Post
  */
  delete: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.delete({ where: { id: id } });
    return res.status(200).json(data);
  },


  /*
  * PURGE POSTS Handler
  */
  purge: async (req, res) => {
    const data = await prisma.post.deleteMany();
    return res.status(200).json(data);
  },


};
