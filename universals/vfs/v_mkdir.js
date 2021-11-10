/*jshint esversion: 8 */
let fs = require("fs");
let emptyPath = require("./empty_path");

const vMkdir = (path = null) => {
  //-[ PATH IS ONLY REQUIRED ]---
  if (emptyPath(path)) return false;

  //-> TRY to Write...
  try {
    const data = fs.mkdirSync(path, { recursive: true });

    console.log("SUCCESS: Directory Created!");
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = vMkdir;
