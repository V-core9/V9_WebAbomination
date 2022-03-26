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
    const data = await prisma.page.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
    return res.status(200).json(data);
  },


  /*
  * Get Page By ID
  */
  byId: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.page.findUnique({ where: { id: id } });
    return res.status(200).json(data);
  },


  /*
  * Create/New Page
  */
  create: async (req, res) => {
    const data = await prisma.page.create(req.body);
    return res.status(200).json(data);
  },


  /*
  * Update a page
  */
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.page.update({ where: { id: id }, data: req.body });
    return res.status(200).json(data);
  },


  /*
  * Delete/Remove
  */
  delete: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.page.delete({ where: { id: id } });
    return res.status(200).json(data);
  },


  /*
  * PURGE PAGES
  */
  purge: async (req, res) => {
    const data = await prisma.page.deleteMany();
    return res.status(200).json(data);
  },


};
