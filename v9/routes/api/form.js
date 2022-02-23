const { form } = require('../../../handlers').api;

module.exports = async (app) => {
  app.get('/api/form/', [form.list]);
  app.post('/api/form/', [form.create]);

  app.get('/api/form/purge/', [form.purge]);

  app.get('/api/form/:id', [form.byId]);
  app.put('/api/form/:id', [form.update]);
  app.delete('/api/form/:id', [form.delete]);

  app.post('/api/form/:slug', [form.submit]);
};
