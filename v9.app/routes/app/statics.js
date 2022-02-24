const path = require("path");

var staticDirs = [
  path.join(__dirname, "../../assets"),
  path.join(__dirname, "../../public")
];

module.exports = async (app) => {
  try {
    for (let i = 0; i < staticDirs.length; i++) {
      await app.use(require("express").static(staticDirs[i]));
    }
    return true;
  } catch (error) {
    return false;
  }
};
