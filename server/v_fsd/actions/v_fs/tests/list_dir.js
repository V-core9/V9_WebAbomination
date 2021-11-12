const path = require('path');
const listDir =require('../_list_dir');


function callbackExample(data){
  console.log(data);
}

listDir(path.join(__dirname,'../../') , callbackExample);
