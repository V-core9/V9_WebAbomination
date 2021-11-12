const vData = require('../index');

// vData.$_data[ <TYPE> ][ <ID> ]
// ACCESS DIRECTLY DATA BY TYPE AND ID
console.log(vData.$_data["users"]["12345152"]);
console.log(vData.$_data["users"]["1222333456"]);
console.log(vData.$_data["pages"]["1231277777"]);
console.log(vData.$_data["pages"]["12345152"]);
console.log(vData.$_data["books"]["1222333456"]);
console.log(vData.$_data["books"]["12345152"]);
