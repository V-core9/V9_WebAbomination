const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//!------------------------
//? PAGES - Handlers
//* 1. list
//* 2. byId
//* 3. create
//* 4. update
//* 5. delete
//* 6. purge
//!------------------------

module.exports = page = {


  /*
  * Listing pages
  */
  get: async (req, res) => {
    try {
      //? Get ByID if param is set
      if (req.params.id !== undefined) return res.status(200).json(await prisma.page.findUnique({ where: { id: parseInt(req.params.id) } }));

      //? Params For getting a list
      const params = {
        skip: 0,
        take: (!isNaN(req.query.take)) ? parseInt(req.query.take) : 5,
        orderBy: { id: 'asc' },
        include: { tags: true }
      };

      if (!isNaN(req.query.skip) && (params.skip >= 0)) params.skip = (parseInt(req.query.skip || 0) - 1) * params.take;

      return res.status(200).json(await prisma.page.findMany(params));

    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },

  /*
  * Create/New Page
  */
  create: async (req, res) => {
    try {
      return res.status(200).json(await prisma.page.create({ data: req.body }));
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Update a page
  */
  update: async (req, res) => {
    try {
      return res.status(200).json(await prisma.page.update({ where: { id: parseInt(req.params.id) }, data: req.body }));
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Delete/Remove
  */
  delete: async (req, res) => {
    try {
      const data = await prisma.page.delete({ where: { id: parseInt(req.params.id) } });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * PURGE PAGES
  */
  purge: async (req, res) => {
    try {
      const data = await prisma.page.deleteMany();
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


};
