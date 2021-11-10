var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//            ^                                       ^   
console.log(format.test("My@string-with(some%text)") );    //true
console.log(format.test("My string with spaces") );        //true 
console.log(format.test("MyStringContainingNoSpecialChars"));       //false

const usernameSchema = {
  format: /[ `!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/,
  max_len: 40,
  min_len: 5,
  test(inVal){
    return usernameSchema.format.test(inVal);
  },
  isValid(inVal){
    return ( !usernameSchema.test(inVal) && inVal.length > usernameSchema.min_len && inVal.length < usernameSchema.max_len );
  }
};
//            ^                                       ^   
console.log(usernameSchema.isValid("My@string-with(some%text)") , ">> Includes disallowed characters.");    //false
console.log(usernameSchema.isValid("My string with spaces"), ">> Includes disallowed characters.");        //false 
console.log(usernameSchema.isValid("MyStringContainingNoSpecialChars"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My_StringCo__Special_Chars"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My-S"), ">> Too Short Username");       // false
console.log(usernameSchema.isValid("My-StringCo-No-Special"), " >> All ok.");       //true
console.log(usernameSchema.isValid("My-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-Special"), ">> Too Long Username");       //true
