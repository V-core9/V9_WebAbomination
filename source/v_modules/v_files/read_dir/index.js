const fs = require('fs');

const readDir = (pathDir, cb = null) => {
  fs.readdir(pathDir, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
};

module.exports = readDir;
