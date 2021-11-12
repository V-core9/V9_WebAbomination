module.exports = (req, res) => {
  auth.admin(req, res);

  const book = req.body;
  books.push(book);

  res.send('book added successfully');
};
