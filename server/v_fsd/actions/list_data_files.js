const path= require('path');
const contentList = path.join(__dirname,'../data/');
const v_fs = require('./v_fs');

function callbackExample(data){
  console.log(data);
}

v_fs.listDir(contentList, callbackExample);
