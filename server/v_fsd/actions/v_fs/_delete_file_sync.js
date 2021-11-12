const fs = require('fs');

const deleteFileSync = (filePath) => {
  try {
    fs.unlinkSync(path);
    return true;
  } catch(error) {
    console.error(error);
    return false;
  }
};

module.exports = deleteFileSync;
