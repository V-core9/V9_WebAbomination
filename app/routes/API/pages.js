const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


var router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    console.log(req.params);

    if (req.query.id) {
      const page = await prisma.page.findUnique({ where: { id: parseInt(req.query.id) }});
      if (page !== null) return res.status(200).json(page);
      return res.status(404).json({ message: 'Page not found' });
    }

    const params = {
      skip: req.query.skip || 0,
      take: req.query.take || 5,
      orderBy: req.query.orderBy || { id: 'asc' },
      include: req.query.include || { tags: true }
    };

    const pages = await prisma.page.findMany(params);
    return res.status(200).json(pages);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await prisma.page.create({ data: req.body });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
