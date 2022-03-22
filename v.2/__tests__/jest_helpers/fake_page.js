
module.exports = async () => {
  var page = await require('./fake_post')();
  return page;
};
