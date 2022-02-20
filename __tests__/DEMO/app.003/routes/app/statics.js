const { router } = require("../../../../../modules");

const path = require("path");

module.exports = async () => {
  router.use(path.join(__dirname, "../../assets"));
  router.use(path.join(__dirname, "../../public"));
};


