/*jshint esversion: 8 */
let fs = require("fs");
let emptyPath = require("./empty_path");

const vSave = (path = null, data = null) => {
  //-[ PATH IS ONLY REQUIRED ]---
  if (emptyPath(path)) return false;

  //-> TRY to Write...
  try {
    fs.writeFileSync(path, data);
    //console.log("SUCCESS: Config file saved!");
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = vSave;
