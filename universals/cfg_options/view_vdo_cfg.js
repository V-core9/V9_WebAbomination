/*jshint esversion: 8 */
const path = require("path");
const userHome = require("user-home");

//console.log(userHome);
const vReadFile = require("../vfs/v_read_file");
const vSave = require("../vfs/v_save");

let appConfig = vReadFile(path.join(__dirname, "_vdo.cfg.json"));
let appConfigTEST = path.join(__dirname, "_vdo.cfg.test.json");

console.log(appConfig);

console.log('\n\n-------------------------------------------------');

const addOption = (name, data) => {
  appConfig[name] = data;
  console.log(appConfig);
  vSave(appConfigTEST, JSON.stringify(appConfig, true, 2));
};

addOption("demoAddingOption",111);
