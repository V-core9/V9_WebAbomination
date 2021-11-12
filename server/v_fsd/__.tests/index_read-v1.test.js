const v_fsd = require('../index');

// v_fsd.findById( <TYPE> ,  <ID> )
// FIND BY ID [from data type]
console.log(v_fsd.findById("users", "12345152"));
console.log(v_fsd.findById("users", "23123123"));
console.log(v_fsd.findById("users", "1231231231231257654"));

console.log(v_fsd.findById("pages", "23123123"));
console.log(v_fsd.findById("pages", "1231277777"));
console.log(v_fsd.findById("pages", "567876545678987654"));

console.log(v_fsd.findById("books", "123578676"));
console.log(v_fsd.findById("books", "1222333456"));
console.log(v_fsd.findById("books", "12312312312312567876545678987654"));
