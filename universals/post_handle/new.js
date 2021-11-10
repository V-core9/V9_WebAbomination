/*jshint esversion: 8 */
const postList = require('./list');
const vSave = require("../vfs/v_save");
const { prompt } = require('enquirer');
const { v4: uuidv4 } = require('uuid');
const loadConfig = require("../config/load");
const vdoConfig = loadConfig();

var helperList = false;

// <_i_> => returns new Task  
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

// <_i_> => returns new Note  
// :_?_: => Info: Uses [_ makeTask() _] to create base than extends that with few things
const makeNote = (title = null, description = null, ref_url = '#', shortDescription = null, content = null) => {
  var base = makeTask(title, description, ref_url);
  base.shortDescription = shortDescription;
  base.content = content;

  return base;
};


async function  promptTitle (postType = null) {
  switch (postType) {
    case 'tasks':
      var titlePromptTask = await prompt({type: 'input',name: 'newTaskTitle',message: 'Title of the new TASK ?'});
      return titlePromptTask.newTaskTitle;
      break;

    case 'notes':
      var titlePromptNote = await prompt({type: 'input',name: 'newNoteTitle',message: 'Title of the new NOTE ?'});
      return titlePromptNote.newNoteTitle;
      break;
  
    default:
      console.log("ERROR: Missing or Unknown < postType >");
      return false;
      break;
  }
};

const titleCheck = ( postType = null, title = null ) => {
  if ( postType === null ) {
    console.log('ERROR: Missing Params in titleCheck()');
    console.trace();
    return false;
  }

  if (title === null) {
    try {
      title = promptTitle(postType);
      if (title !== null ) {
        return title;
      } 
      return title;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

};

//-> Used for making of new entry into some post type
const extendedList = ( helperListLoc = null, postType = null , title = null , description = null , ref_url = "#", shortDescription = null , content = null ) => {
  

  if (helperListLoc === null ) helperListLoc = [];

  switch (postType) {
    case "notes":
      try {
        var waiterNote = makeNote(title, description, ref_url, shortDescription, content);
        helperListLoc.push( waiterNote );
        savePost( vdoConfig.main_notes_file, helperListLoc )
        return true;
      } catch (err) {
        console.log(err);
        return err;
      }
      break;

    case "tasks":
      try {
        var waiterTask = makeTask(title, description, ref_url);
        helperListLoc.push( waiterTask );
        savePost( vdoConfig.main_todo_file, helperListLoc );
        return true;
      } catch (err) {
        console.log(err);
        return err;
      }
      break;
  
    default:
      console.log("ERROR: Missing or Unknown < helperListLoc = null, postType = null  >");
      return false;
      break;
  }
};

//---------------
const newPost = ( params = null) => {   
  var postType = (params.postType) ? params.postType : null;   
  var title = (params.title) ? params.title : null;
  var shortDescription = (params.shortDescription) ? params.shortDescription : null;  
  var description = (params.description) ? params.description : null;
  var ref_url = (params.ref_url) ? params.ref_url : null;
  var content = (params.content) ? params.content : null;
  
  title = titleCheck(postType, title );
  helperList = postList(postType); 
  var extendedListHelper = extendedList(helperList, postType, title, description, ref_url, shortDescription, content);

  if (helperList === false){
    console.log(helperList);
    return helperList;
  }

}

const savePost = (path, data) => {
  
  try {
    vSave( path , JSON.stringify( data , true, 2) );
    console.log("Added new note!");
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
}
//---------------
module.exports = newPost;
