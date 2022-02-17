const core = require('../../../modules/core');

core({
  port: 3000,
  routes: {
    '/': {
      get: (req, res) => {
        res.send('Hello World!');
      },
      post: (req, res) => {
        res.send('Hello World!');
      }
    },
    '/miki/': {
      get: (req, res) => {
        res.send('Hello MIKI!');
      }
    },
  }
});
