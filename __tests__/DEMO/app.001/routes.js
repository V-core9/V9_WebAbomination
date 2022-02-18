const { router } = require('../modules');

sampleMiddleware = async (req, res, next) => {
  res.write('Middleware@'+Date.now()+'\n');
  next();
};

sampleHandler = async (req, res) => {
  res.end('Getting :'+JSON.stringify(req.params));
};

var sampleFunctionList = [
  sampleMiddleware,
  sampleHandler
];

module.exports = async () => {
  await router.add('/', 'get', sampleFunctionList);

  await router.get('/page/', sampleFunctionList);
  await router.post('/page/', sampleFunctionList);

  await router.get('/page/:id', sampleFunctionList);
  await router.put('/page/:id', sampleFunctionList);
  await router.delete('/page/:id', sampleFunctionList);

  await router.new('/:page_slug', 'get', sampleFunctionList);
};

