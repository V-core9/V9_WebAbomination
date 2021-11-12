

const path = require('path');
const deleteFileSync =require('../_delete_file_sync');

console.log(deleteFileSync(path.join(__dirname,'./test_output.txt')));
