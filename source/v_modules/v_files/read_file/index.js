const fs = require('fs');


const readFile = (filePath, encoding = 'utf8', cb = null) => {
  fs.readFile(filePath, encoding , (err, data) => {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(data);

    if (typeof cb === 'function') {
      console.log("\n--------------------------\n[readFile] >> Callback found triggering\n--------------------------\n");
      cb(data);
    }
  });
};

module.exports = readFile;
