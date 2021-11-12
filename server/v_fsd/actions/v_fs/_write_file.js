const fs = require('fs');

const writeFile = (filePath, content, callback) => {
  try {
    fs.writeFile( filePath, content, encoding = "utf8", err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      callback();
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = writeFile;
