const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


var router = require('express').Router();


router.get('/', async (req, res) => {
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
});

module.exports = router;
