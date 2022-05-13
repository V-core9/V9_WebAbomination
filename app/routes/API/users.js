const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


var router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    const params = {
      skip: 0,
      take: 5,
      orderBy: { id: 'asc' },
      select: { id: true, username: true, email: true, role: true }
    };

    if (!isNaN(req.params.perPage)) params.take = parseInt(req.params.perPage);
    if (!isNaN(req.params.page)) params.skip = (parseInt(req.params.page || 0) - 1) * params.take;
    if (params.skip < 0) params.skip = 0;

    const users = await prisma.user.findMany(params);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
