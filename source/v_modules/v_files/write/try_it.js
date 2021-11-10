const write = require('./index');
const path = require('path');

function sampleCallback () {
  console.log('Saved!');
}

write( path.join(__dirname,'mynewfile3.txt'), 'Hello content!', sampleCallback);
