const v_fsd = require('../index');

// v_fsd.$_data.users[ <ID> ]
// v_fsd.$_data.pages[ <ID> ]
// v_fsd.$_data.books[ <ID> ]
// ACCESS DIRECTLY DATA_TYPE IN THE DATA >> BY ID
console.log(v_fsd.$_data.users["12345152"]);
console.log(v_fsd.$_data.users["12345152"]);

console.log(v_fsd.$_data.pages["1231277777"]);
console.log(v_fsd.$_data.pages["12345152"]);

console.log(v_fsd.$_data.books["1222333456"]);
console.log(v_fsd.$_data.books["12345152"]);
