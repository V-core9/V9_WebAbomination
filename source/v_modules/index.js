const { write, read_dir,  read_file} = require('./v_files');

module.exports = {
  vModules : {
    vFiles : require('./v_files')
  },
  vFiles : require('./v_files'),
  write: write,
  read_dir: write,
  read_file: write
};
