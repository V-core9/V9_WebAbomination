const router = require('../../../modules/router');

(async () => {

  sampleFunction = async (req, res) => {
    console.log('getting homepage');
  };

  var sampleFunctionList = [
    sampleFunction,
    sampleFunction,
    sampleFunction
  ];

  await router.add('/', 'get', sampleFunctionList);

  await router.get('/page/', sampleFunctionList);
  await router.post('/page/', sampleFunctionList);

  await router.get('/page/:id', sampleFunctionList);
  await router.get('/page/:id', sampleFunctionList);
  await router.put('/page/:id', sampleFunctionList);
  await router.delete('/page/:id', sampleFunctionList);

  await router.new('/:page_slug', 'get', sampleFunctionList);

  console.log(router);
  console.log(router.routes);
})();
