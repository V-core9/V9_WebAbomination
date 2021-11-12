const v_fsd = require('../index');

// v_fsd.$_data[ <TYPE> ][ <ID> ]
// ACCESS DIRECTLY DATA BY TYPE AND ID
console.log(v_fsd.$_data["users"]["12345152"]);
console.log(v_fsd.$_data["users"]["1222333456"]);
console.log(v_fsd.$_data["pages"]["1231277777"]);
console.log(v_fsd.$_data["pages"]["12345152"]);
console.log(v_fsd.$_data["books"]["1222333456"]);
console.log(v_fsd.$_data["books"]["12345152"]);
