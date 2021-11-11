var users = require("./users.json");
var pages = require("./pages.json");
var books = require("./books.json");

const vData = {
  $_data: { users: users ,  pages:  pages ,  books:  books },
  findById(itemId, dataType) {
    var response = vData.$_data[dataType][itemId];
    //console.log(response);
    return response;
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


};

//console.log(vData);
//console.log(vData.$_data);
//console.log(vData.$_data["users"]);
//console.log(vData.$_data["pages"]);
//console.log(vData.$_data["books"]);

console.log(vData.findById("123578676", "books"));
console.log(vData.findById("1222333456", "books"));
