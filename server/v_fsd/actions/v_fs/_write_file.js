const fs = require('fs');

const writeFile = (filePath, content, callback, encoding = "utf8") => {
  try {
    fs.writeFile( filePath, content, encoding, err => {
      if (err) {
        //console.error(err);
        return;
      }
      //file written successfully
      callback(filePath);
    });
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = writeFile;
