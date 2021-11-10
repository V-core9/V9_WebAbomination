/*jshint esversion: 8 */
const vReadFile = require("../vfs/v_read_file");
const dataLocation = require("./data_location");

const loadConfig = () => {
  return vReadFile(dataLocation);
};

module.exports = loadConfig;
