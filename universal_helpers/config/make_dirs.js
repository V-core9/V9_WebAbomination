/*jshint esversion: 8 */

const vMkdir = require("../vfs/v_mkdir");
const loadConfig = require("./load");
const makeDirs = () => {
  var config = loadConfig();
  vMkdir(config.Application.data_folder);
};

module.exports = makeDirs;
