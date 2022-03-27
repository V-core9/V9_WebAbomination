module.exports = validateAdmin = async (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.sendStatus(403);
  }
  next();
};
