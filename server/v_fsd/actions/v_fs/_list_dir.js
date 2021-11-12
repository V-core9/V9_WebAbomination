const fs = require('fs');

const listDir = (dirPath, callback) =>{
  try {
    var responseList = [];

    fs.readdir(dirPath, (err, files) => {
      files.forEach(file => {
        responseList.push(file);
      });

      callback(responseList);
      
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = listDir;
