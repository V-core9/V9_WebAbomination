const vData = require('../index');


function log(data){
  console.log(data);
}


// Returns names of all data types added
log(vData.getDataTypes());

// Number of different data types - similar to WordPress Posts 
log(vData.getDataTypesCount());

// List of files in data folder
log(vData.getFilesList());
