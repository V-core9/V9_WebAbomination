
var users = require("./content/users.json");
var pages = require("./content/pages.json");
var books = require("./content/books.json");

const vData = {

  _data: {
    users,
    pages,
    books,
  },

  findById(dataType, itemId) {
    try {
      var response = vData._data[dataType][itemId];
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
      return Object.keys(vData._data);
    } catch (error) {
      return false;
    }
  },

  dataTypeCount () {
    try {
      return vData.getDataTypes().length;
    } catch (error) {
      return false;
    }
  },
};


// FIND BY ID [from data type]
console.log(vData.findById("users", "12345152"));
console.log(vData.findById("users", "23123123"));
console.log(vData.findById("users", "1231231231231257654"));

console.log(vData.findById("pages", "23123123"));
console.log(vData.findById("pages", "1231277777"));
console.log(vData.findById("pages", "567876545678987654"));

console.log(vData.findById("books", "123578676"));
console.log(vData.findById("books", "1222333456"));
console.log(vData.findById("books", "12312312312312567876545678987654"));



// ACCESS DIRECTLY DATA_TYPE IN THE DATA >> BY ID
console.log(vData._data.users["12345152"]);
console.log(vData._data.users["12345152"]);

console.log(vData._data.pages["1231277777"]);
console.log(vData._data.pages["12345152"]);

console.log(vData._data.books["1222333456"]);
console.log(vData._data.books["12345152"]);

// ACCESS DIRECTLY DATA BY TYPE AND ID
console.log(vData._data["users"]["12345152"]);
console.log(vData._data["users"]["1222333456"]);
console.log(vData._data["pages"]["1231277777"]);
console.log(vData._data["pages"]["12345152"]);
console.log(vData._data["books"]["1222333456"]);
console.log(vData._data["books"]["12345152"]);



console.log(vData.getDataTypes());

console.log(vData.dataTypeCount());
