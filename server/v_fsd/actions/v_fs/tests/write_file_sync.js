
const writeFile =require('../_write_file');
const path = require('path');

const content = 'Some content!';
const demoFilePath = path.join(__dirname,'/test_output.txt');


console.log(writeFile(demoFilePath, content ));
