module.exports = async (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/page', (req, res) => {
    res.send('Page!');
  });

  app.get('/page/:id', (req, res) => {
    res.send(`Page ${req.params.id}!`);
  });

};
