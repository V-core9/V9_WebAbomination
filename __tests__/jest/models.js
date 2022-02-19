var itemsCount = 200;

(async () => {
  require('../jest_helpers/user')(itemsCount);
  require('../jest_helpers/post')(itemsCount);
  require('../jest_helpers/page')(itemsCount);
})();
