const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//!------------------------
//? POSTS - Handlers
//* 1. create
//* 2. read
//* 3. update
//* 4. delete
//* 5. purge
//!------------------------

module.exports = post = {

  /*
  * CREATE New Post
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
  * READ posts
  */
  read: async (req, res) => {
    try {
      //? Get ByID if param is set
      if (req.params.id !== undefined) return res.status(200).json(await prisma.post.findUnique({ where: { id: parseInt(req.params.id) } }));

      //? Params For getting a list
      const params = {
        skip: 0,
        take: (!isNaN(req.query.take)) ? parseInt(req.query.take) : 5,
        orderBy: { id: 'asc' },
        include: { tags: true }
      };

      if (!isNaN(req.query.skip) && (params.skip >= 0)) params.skip = (parseInt(req.query.skip || 0) - 1) * params.take;

      return res.status(200).json(await prisma.post.findMany(params));

    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * UPDATE Post
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
  * DELETE Post
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
