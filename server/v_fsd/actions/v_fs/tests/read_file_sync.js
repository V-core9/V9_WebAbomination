const readFileSync = require('../_read_file_sync');
const path= require('path');

console.log(readFileSync(path.join(__dirname,"./test_output_sync.txt")));
