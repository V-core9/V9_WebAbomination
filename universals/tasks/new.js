/*jshint esversion: 8 */
const taskList = require('./list');
var helperTaskList = taskList();
const vSave = require("../vfs/v_save");
const { prompt } = require('enquirer');
const { v4: uuidv4 } = require('uuid');
const loadConfig = require("../config/load");
const vdoConfig = loadConfig();
const makeTask = (title = null, description = null, ref_url = '#') => {
  return {
    id: uuidv4(),
    title: title,
    description: description,
    ref_url: ref_url,
    timestamps: {
      born: Date.now(),
      updated: Date.now(),
      done: null,
    },
    status: 'draft',
  };
};
//---------------
async function newTask (title = null, description = null, ref_url = '#'){        
  var helpTitle = title;

  if (title === null) {
    const questionNewTitle = [{
      type: 'input',
      name: 'newTaskTitle',
      message: 'Title of the new task?'
    }];
    var titlePrompt = await prompt(questionNewTitle);
    helpTitle = titlePrompt.newTaskTitle;
    console.log(helpTitle);
  }

  var newTask = makeTask(helpTitle, description, ref_url);

  helperTaskList.push(newTask);

  return vSave(vdoConfig.main_todo_file, JSON.stringify(helperTaskList, true, 2));
}

//---------------
module.exports = newTask;
