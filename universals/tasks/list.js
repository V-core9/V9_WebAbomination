/*jshint esversion: 8 */
const postList = require("../post_handle/list");
//---------------
const taskList = () => {
  return postList('tasks');
};

module.exports = taskList;
