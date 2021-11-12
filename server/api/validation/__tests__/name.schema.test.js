const nameSchema = require('../name.schema');

//            ^                                       ^   
console.log(nameSchema.isValid("My@string-with(some%text)") , ">> disallowed characters");    //false
console.log(nameSchema.isValid("My string with spaces"), ">> ok");        //true 
console.log(nameSchema.isValid("MyStringContainingNoSpecialChars"), " >> ok");       //true
console.log(nameSchema.isValid("My_StringCo__Special_Chars"), " >> disallowed characters");       //false
console.log(nameSchema.isValid("My-S"), ">> ok");       // true
console.log(nameSchema.isValid("My-StringCo-No-Special"), " >> ok");       //true
console.log(nameSchema.isValid("My-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-Special"), ">> Too Long");       //true
console.log(nameSchema.isValid("M"), ">> Too Short");       //true
