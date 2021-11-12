const emailSchema = require('../email.schema');

console.log(emailSchema.isValid("My@string-with(some%text)") , ">> Includes disallowed characters.");    //false
console.log(emailSchema.isValid("mojmail@gmail.om"), ">> Ok email.");        //true
console.log(emailSchema.isValid("MyStringContainingNoSpecialChars"), " >> All ok.");       //true
console.log(emailSchema.isValid("My_StringCo__Special_Chars"), " >> All ok.");       //true
console.log(emailSchema.isValid("My-S"), ">> Too Short Username");       // false
console.log(emailSchema.isValid("My-StringCo-No-Special"), " >> All ok.");       //true
console.log(emailSchema.isValid("My-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-Special"), ">> Too Long Username");       //true
