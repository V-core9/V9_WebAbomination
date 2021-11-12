const fs = require('fs');
const path = require('path');

const dataTypes = require('./data_types');

const typeList = (itemType) => {
  try {
    return  fs.readdirSync(path.join(__dirname,itemType.dir));
  } catch (error) {
    console.error(error);
    return false;
  }
};

const pagesList = () => {
  return typeList(dataTypes.pages);
};
const usersList = () => {
  return typeList(dataTypes.users);
};
const postsList = () => {
  return typeList(dataTypes.posts);
};
const tagsList = () => {
  return typeList(dataTypes.tags);
};
const linksList = () => {
  return typeList(dataTypes.links);
};
const authorsList = () => {
  return typeList(dataTypes.authors);
};

/*
console.log(pagesList());
console.log(usersList());
console.log(postsList());
console.log(tagsList());
console.log(linksList());
*/

module.exports = {
  pagesList,
  usersList,
  postsList,
  tagsList,
  linksList,
  authorsList
};
