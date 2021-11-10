/*jshint esversion: 8 */
const postList = require("../post_handle/list");
//---------------
const notesList = () => {
  return postList('notes');
};

module.exports = notesList;
