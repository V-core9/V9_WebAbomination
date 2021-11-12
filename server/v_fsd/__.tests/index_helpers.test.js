const v_fsd = require('../index');


function log(data){
  console.log(data);
}


// Returns names of all data types added
log(v_fsd.getDataTypes());

// Number of different data types - similar to WordPress Posts 
log(v_fsd.getDataTypesCount());

// List of files in data folder
log(v_fsd.getFilesList());
