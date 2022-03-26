module.exports = validateAdmin = async (req, res, next) => {
  const { role } = req.user;

  if (role !== 'ADMIN') {
    return res.sendStatus(403);
  }
  next();
};
