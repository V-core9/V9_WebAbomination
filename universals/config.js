/*jshint esversion: 8 */
const path = require("path");
const userHome = require("user-home");
const { v4: uuidv4 } = require('uuid');
const dataLocation = require("./config/data_location")
//console.log(userHome);
const vReadFile = require("./vfs/v_read_file");

let appConfig = vReadFile(path.join(__dirname, "cfg_data/_vdo.cfg.json"));
let demoTodo = vReadFile(path.join(__dirname, "cfg_data/todo_sample.json"));
let demoNote = vReadFile(path.join(__dirname, "cfg_data/note_sample.json"));

const vdoConfig = {
  dataLocation: dataLocation,
  appConfig: appConfig,
  sampleTodo: [{
    id: uuidv4(),
    title: demoTodo.title,
    description: demoTodo.description,
    ref_url: demoTodo.ref_url,
    timestamps:{
      born: Date.now(),
      updated: Date.now(),
      done: null
    },
    status: 'draft',
  },],
  sampleNote: [
    {    
    id: uuidv4(),
    title: demoNote.title,
    short_description: demoNote.short_description,
    description: demoNote.description,
    content: demoNote.content,
    ref_url: demoNote.ref_url,
    timestamps:{
      born: Date.now(),
      updated: Date.now(),
      publish: false
    },
    status: 'draft',
  },
  ]
};

module.exports = vdoConfig;
