/*jshint esversion: 8 */
//---------------
const postTotalNumber = require('../post_handle/total_number');

const totalNumber = () => {
  return postTotalNumber('notes');
};

module.exports = totalNumber;
