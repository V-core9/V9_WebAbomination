/*jshint esversion: 8 */

const emptyPath = (path = null) => {
  if (path === null || path === "" || path.length === 0) {
    console.log("ERROR: Empty PATH in vSave(path, data)");
    console.trace();
    return true;
  }
  return false;
};

module.exports = emptyPath;
