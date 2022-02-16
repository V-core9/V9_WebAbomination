const router = require('../../router');

sampleFunction = async (req, res) => {
    console.log('getting homepage');
};

var sampleFunctionList = [
    sampleFunction,
    sampleFunction,
    sampleFunction
];

(async () => {
    await router.add('/', 'get', sampleFunctionList);

    await router.add('/page/', 'get', sampleFunctionList);
    await router.add('/page/', 'post', sampleFunctionList);

    await router.new('/page/:id', 'get', sampleFunctionList);
    await router.new('/page/:id', 'get', sampleFunctionList);
    await router.new('/page/:id', 'put', sampleFunctionList);
    await router.new('/page/:id', 'delete', sampleFunctionList);

    await router.new('/:page_slug', 'get', sampleFunctionList);

    console.log(router);
    console.log(router.routes);
})();
