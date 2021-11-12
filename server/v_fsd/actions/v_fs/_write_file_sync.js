const fs = require('fs');

const writeFileSync = (filePath, content) => {
  try {
    fs.writeFile( filePath, content, encoding = "utf8", err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      return true;
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = writeFileSync;
