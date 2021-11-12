const path= require('path');
const contentList = path.join(__dirname,'../data/content/');
const v_fs = require('./v_fs');

const getFilesList = () => {
  return  v_fs.listDir(contentList);
};

module.exports = getFilesList;
