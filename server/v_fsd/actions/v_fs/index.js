const listDir = require('./_list_dir_sync');
const writeFile = require('./_write_file');


const v_fs = {
  listDir,
  writeFile ,
};

module.exports = { 
  v_fs,
  listDir,
  writeFile ,
};

