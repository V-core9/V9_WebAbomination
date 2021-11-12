
const { usersList,  pagesList, postsList , tagsList, linksList, authorsList } = require('./_list');
const dataTypes = require('./data_types');
const fs = require('fs');
const path= require('path');

const resp = {
  users: usersList(),
  pages: pagesList(),
  posts: postsList(),
  tags: tagsList(),
  links: linksList(),
  authors: authorsList(),
};

const config = {
  encoding : "utf8"
};


const vData = {
  pagesList : resp.pages,
  usersList : resp.users,
  postsList : resp.posts,
  tagsList : resp.tags,
  linksList : resp.links,
  authorsList: resp.authors,
  findById( dir , id) {
    try {
      return JSON.parse(fs.readFileSync( path.join(__dirname, dir, `/${id}.json`), config.encoding ));
    } catch (error) {
        return false;
    }
  },

  findPostById (id){
    return this.findById( '/posts' , id );
  },

  findUserById (id){
    return this.findById( '/users'  , id);
  },

  findPageById (id){
    return this.findById( '/pages' , id);
  },

  findTagById (id){
    return this.findById( '/tags' , id);
  },

  findLinkById (id){
    return this.findById( '/links' , id);
  },

  findAuthorById (id){
    return this.findById( '/authors' , id);
  }

};


module.exports = vData;
