var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//            ^                                       ^   
console.log(format.test("My@string-with(some%text)") );    //true
console.log(format.test("My string with spaces") );        //true 
console.log(format.test("MyStringContainingNoSpecialChars"));       //false

const nameSchema = {
  format: /[`!@#$%^&*()_+=\[\]{};':"\\|,<>\/?~]/,
  max_len: 60,
  min_len: 2,
  test(inVal){
    return nameSchema.format.test(inVal);
  },
  isValid(inVal){
    return ( !nameSchema.test(inVal) && inVal.length > nameSchema.min_len && inVal.length < nameSchema.max_len );
  }
};
//            ^                                       ^   
console.log(nameSchema.isValid("My@string-with(some%text)") , ">> Includes disallowed characters.");    //false
console.log(nameSchema.isValid("My string with spaces"), ">> ok");        //true 
console.log(nameSchema.isValid("MyStringContainingNoSpecialChars"), " >> All ok.");       //true
console.log(nameSchema.isValid("My_StringCo__Special_Chars"), " >>  Includes disallowed characters.");       //false
console.log(nameSchema.isValid("My-S"), ">> ok");       // true
console.log(nameSchema.isValid("My-StringCo-No-Special"), " >> All ok.");       //true
console.log(nameSchema.isValid("My-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-SpecialMy-StringCo-No-Special"), ">> Too Long");       //true
