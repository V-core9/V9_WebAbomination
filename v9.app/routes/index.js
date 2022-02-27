error404 = async (req, res) => {
  return res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`);
};

module.exports = async (expr) => {
  await require('./api')(expr);
  await require('./app')(expr);
  await require('./public')(expr);

  await expr.get('*', [error404]);
  await expr.post('*', [error404]);
  await expr.put('*', [error404]);
  await expr.delete('*', [error404]);
};
