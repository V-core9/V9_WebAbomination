/*jshint esversion: 8 */
const taskList = require('./list');
var helperTaskList = taskList();
const vSave = require("../vfs/v_save");
const loadConfig = require("../config/load");
const vdoConfig = loadConfig();
//---------------
const setStatus = (  id = null, status = false) => {
  console.log("\n-----<[-s- WORK-IN-PROGRESS -s-]>-----------\n");
  if (id === null) {
    console.log('ERROR: Can not trash item >> Empty ID');
    return false;
  }
  console.log('HELPER:  ' + helperTaskList);
  helperTaskList.forEach(item => {
    if (item.id === id) {
        item.status = status;
    }
  });
  vSave(vdoConfig.main_todo_file, JSON.stringify(helperTaskList, true, 2));
  console.log("\n-----<[-e- WORK-IN-PROGRESS -e-]>-----------\n");
};

//---------------
module.exports = setStatus;
