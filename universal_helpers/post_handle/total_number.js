/*jshint esversion: 8 */
//---------------
const postList = require('./list');

const postTotalNumber = (postType = null) => {
  try {
    var postListRes = postList(postType);
    var len = postListRes.length;
    return len;
  } catch (err){
    console.log(err);
    return err;
  }
};

module.exports = postTotalNumber;
