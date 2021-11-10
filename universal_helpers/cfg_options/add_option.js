/*jshint esversion: 8 */
const path = require("path");
const vReadFile = require("../vfs/v_read_file");
const vSave = require("../vfs/v_save");

const vdoCfgSamplePath = path.join(__dirname, "../cfg_data/_vdo.cfg.json");

const addOption = (name, data) => {
  try {
    let appConfig = vReadFile(vdoCfgSamplePath);
    appConfig[name] = data;
    vSave(vdoCfgSamplePath, JSON.stringify(appConfig, true, 2));
    console.log("SUCCESS: Registered New Option!");
    return true;
  }
  catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = addOption;
