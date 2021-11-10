/*jshint esversion: 8 */
let fs = require("fs");
let emptyPath = require("./empty_path");
const vReadFile = (path = null) => {
  //-[ PATH IS ONLY REQUIRED ]---
  if (emptyPath(path)) return false;

  try {
    var appConfig = fs.readFileSync(path);
    //console.log("SUCCESS: File Loaded >> "+ path);
    return JSON.parse(appConfig);
  } catch (error) {
    console.warn(Error);
    return error;
  }
};

module.exports = vReadFile;
