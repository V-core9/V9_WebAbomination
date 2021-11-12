const fs = require('fs');

const readFileSync = (filePath, encoding = "utf8") => {
  try {
    return  fs.readFileSync( filePath, encoding);
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = readFileSync;
