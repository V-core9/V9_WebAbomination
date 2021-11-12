const vData = require('./index');


console.log(vData);

console.log(`\nFIND POST : ${vData.findPostById("1122334455")}`);
console.log(`\nFIND USER : ${vData.findUserById("9512630")}`);
console.log(`\nFIND PAGE : ${vData.findPageById("13125416")}`);
console.log(`\nFIND TAG : ${vData.findTagById("123654789")}`);
console.log(`\nFIND LINK : ${vData.findLinkById("1213214")}`);
