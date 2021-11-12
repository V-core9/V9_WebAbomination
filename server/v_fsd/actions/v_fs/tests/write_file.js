
const writeFile =require('../_write_file');
const path = require('path');

const content = 'Some content!';
const demoFilePath = path.join(__dirname,'/test_output.txt');


function cbLog(data){
  console.log(`✅ File Written Successfully\nFILE_PATH : [ ${data} ]`);
}

writeFile(demoFilePath, content , cbLog);
