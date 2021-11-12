const path = require('path');
const listDirSync =require('../_list_dir_sync');

console.log(listDirSync(path.join(__dirname,'../')));
