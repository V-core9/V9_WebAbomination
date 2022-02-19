const { router } = require('../../modules/');

sampleFunction = async (req, res, next) => {
  res.write('Hello from sample function middleware');
  next();
};

(async () => {
  test("1. Setup SampleFunction as 1st middleware", async () => {
    expect(await router.use(sampleFunction)).toEqual(true);
  });
})();
