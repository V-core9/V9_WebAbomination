const fs = require('fs');

const listDir = (dirPath, cb) => {
  try {
    fs.readdir(dirPath, cb );
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = listDir;
