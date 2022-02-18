module.exports = async (app) => {

  try {
    //? [blog+bySlug] Blog Page and Blog Post By Slug
    app.get('/blog/', async (req, res) => {
      return res.send('BLOG PAGE >> WILL LOAD LIST OF POSTS');
    });
    app.get('/blog/:slug', async (req, res) => {
      return res.send('BLOG -> by SLUG');
    });
    //! [blog+bySlug]

    //? [create+viewList] Create new post & view list of posts
    app.get('/api/post/', async (req, res) => {
      return res.send(`GET /api/post/ !`);
    });
    app.post('/api/post/', async (req, res) => {
      return res.send(`POST /api/post/ !`);
    });
    //! [create+viewList]

    //? [view/update/delete] post by ID
    app.get('/api/post/:id', async (req, res) => {
      return res.send(`GET post ${req.params.id}!`);
    });
    app.put('/api/post/:id', async (req, res) => {
      return res.send(`PUT post ${req.params.id}!`);
    });
    app.delete('/api/post/:id', async (req, res) => {
      return res.send(`DELETE post ${req.params.id}!`);
    });
    //! [view/update/delete]

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }

};
