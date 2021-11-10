const validateAdmin=( req, res ) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.sendStatus(403);
  }
};

module.exports = validateAdmin;
