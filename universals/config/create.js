/*jshint esversion: 8 */
const vdoConfig = require("../config");
const vSave = require("../vfs/v_save");

const createAppConfig = () => {
  vSave(vdoConfig.dataLocation, JSON.stringify(vdoConfig.appConfig, true, 2));
};

const createTodo = () => {
  vSave(vdoConfig.appConfig.main_todo_file, JSON.stringify(vdoConfig.sampleTodo, true, 2));
};

const createNotes = () => {
  vSave(vdoConfig.appConfig.main_notes_file, JSON.stringify(vdoConfig.sampleNote, true, 2));
};

const createConfig = () => {
  createAppConfig();
  createTodo();
  createNotes();
};


module.exports = [ createConfig, createAppConfig, createTodo, createNotes ];
