
var users = require("./data/users.json");
var pages = require("./data/pages.json");
var books = require("./data/books.json");

const v_fsd = {

  $_data: {
    users,
    pages,
    books,
  },

  findById(dataType, itemId) {
    try {
      var response = v_fsd.$_data[dataType][itemId];
      return typeof response === "undefined" ? false : response;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  add(data) {
    console.log(data);
  },

  remove(data) {
    try {
      //console.log(data.item_id, data.type);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  getDataTypes () {
    try {
      return Object.keys(v_fsd.$_data);
    } catch (error) {
      return false;
    }
  },

  dataTypeCount () {
    try {
      return v_fsd.getDataTypes().length;
    } catch (error) {
      return false;
    }
  },
};


module.exports = v_fsd;
