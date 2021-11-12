const vData = require('../index');

// vData.findById( <TYPE> ,  <ID> )
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
