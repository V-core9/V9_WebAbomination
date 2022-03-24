const express = require('express');
const path = require('path');

error404 = async (req, res) => {
  return res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`);
};

module.exports = app => {

  app.use(express.static(path.join(__dirname, '../assets')));


  require('./api')(app);
  require('./app')(app);

  //! All "random/unknown" routes get a 404 errors
  app.route('*')
    .get([error404])
    .post([error404])
    .put([error404])
    .delete([error404]);
};
