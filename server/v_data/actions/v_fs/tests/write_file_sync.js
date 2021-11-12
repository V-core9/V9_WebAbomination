
const writeFileSync = require('../_write_file_sync');
const path = require('path');


const content = 'Some content!';

const demoFilePath = path.join(__dirname, '/test_output_sync.txt');
var resultWrite = writeFileSync(demoFilePath, content);
console.log(resultWrite ? `✅ File Written Successfully\nFILE_PATH : [ ${demoFilePath} ]` : resultWrite);


const demoFilePathQQ = path.join(__dirname, '/QQ/QQ/test_output_sync.txt');
var resultWriteQQ = writeFileSync(demoFilePathQQ, content);
console.log(resultWriteQQ ? `✅ File Written Successfully\nFILE_PATH : [ ${demoFilePathQQ} ]` : resultWriteQQ);
