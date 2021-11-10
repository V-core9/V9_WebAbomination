/*jshint esversion: 8 */

const cmdArgsAction = {
  name: "action",
  required: true,
  description: "action/function/method you want it to execute",
  default: "view",
  options: ["view", "new", "trash", "untrash", "edit", "update", "complete", "incomplete", "total_number", "generate_test", "purge_system"],
};

module.exports = cmdArgsAction;
