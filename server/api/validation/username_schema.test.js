const usernameSchema = require('./username_schema');

console.log(usernameSchema.isValid("My@string-with(some%text)") , ">> Includes disallowed characters.");    //false
console.log(usernameSchema.isValid("My string with spaces"), ">> Includes disallowed characters.");        //false 
console.log(usernameSchema.isValid("MyStringContainingNoSpecialChars"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My_StringCo__Special_Chars"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My-S"), ">> Too Short Username");       // false
console.log(usernameSchema.isValid("My-StringCo-No-Special"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-Special"), ">> Too Long Username");       //true
