module.exports = async (app) => {

  try {
    //? [PAGE+bySlug] Blog Page and Blog Post By Slug
    app.get('/', async (req, res) => {
      return res.send('Hello World!');
    });
    app.get('/:slug', async (req, res) => {
      return res.send('PAGE -> by SLUG');
    });
    //! [PAGE+bySlug]

    //? [create+viewList] Create new post & view list of posts
    app.get('/api/page/', async (req, res) => {
      return res.send(`GET /api/page/ !`);
    });
    app.post('/api/page/', async (req, res) => {
      return res.send(`POST /api/page/ !`);
    });
    //! [create+viewList]

    //? [view/update/delete] post by ID
    app.get('/api/page/:id', async (req, res) => {
      return res.send(`GET page ${req.params.id}!`);
    });
    app.put('/api/page/:id', async (req, res) => {
      return res.send(`PUT page ${req.params.id}!`);
    });
    app.delete('/api/page/:id', async (req, res) => {
      return res.send(`DELETE page ${req.params.id}!`);
    });
    //! [view/update/delete]

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }

};
