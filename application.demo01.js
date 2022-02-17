const {cluster, core, router} = require('./modules');


(async () => {

  sampleMiddleware = async (req, res, next) => {
    //console.log('middleware');
    next();
  };

  sampleHandler = async (req, res) => {
    return res.send('getting homepage');
  };

  var sampleFunctionList = [
    sampleMiddleware,
    sampleHandler
  ];

  await router.add('/', 'get', sampleFunctionList);

  await router.get('/page/', sampleFunctionList);
  await router.post('/page/', sampleFunctionList);

  await router.get('/page/:id', sampleFunctionList);
  await router.get('/page/:id', sampleFunctionList);
  await router.put('/page/:id', sampleFunctionList);
  await router.delete('/page/:id', sampleFunctionList);

  await router.new('/:page_slug', 'get', sampleFunctionList);

  console.log(cluster);
  console.log(core);
  console.log(router);

  cluster({port: 3000, app: core, routes : router.routes});

})();
