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

      const pages = await prisma.page.findMany(params);
      return res.status(200).json(pages);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Get Page By ID
  */
  byId: async (req, res) => {
    try {
      const data = await prisma.page.findUnique({ where: { id: parseInt(req.params.id) } });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },

  bySlug: async (req, res) => {
    try {
      const data = await prisma.page.findUnique({ where: { slug: req.params.slug } });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },

  /*
  * Create/New Page
  */
  create: async (req, res) => {
    try {
      const data = await prisma.page.create({ data: req.body });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  },


  /*
  * Update a page
  */
  update: async (req, res) => {
    try {
      const data = await prisma.page.update({ where: { id: parseInt(req.params.id) }, data: req.body });
      return res.status(200).json(data);
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
