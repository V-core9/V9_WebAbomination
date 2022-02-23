error404 = async (req, res) => {
  return res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`);
};

module.exports = async (app) => {
  await require('./api')(app);
  await require('./app')(app);

  await app.get('*', [error404]);
  await app.post('*', [error404]);
  await app.put('*', [error404]);
  await app.delete('*', [error404]);
};
