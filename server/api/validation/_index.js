const email = require('./email.schema');
const name = require('./name.schema');
const username = require('./username.schema');

const dataValidation = {
  schema: {
    email,
    name,
    username
  },
  test(type, inVal) {
    //console.log(this.schema[type]);
    return this.schema[type].format.test(inVal);
  },
  isValid(type, valueToCheck) {
    const formatCheck =  !this.test(type, valueToCheck);
    const minLen = (typeof this.schema[type].min_len === 'undefined') ? true : this.schema[type].min_len <= valueToCheck.length  ;
    const maxLen = (typeof this.schema[type].max_len === 'undefined') ? true : this.schema[type].max_len >= valueToCheck.length;
    return (formatCheck && minLen &&  maxLen);
  }
};

console.log(dataValidation);
console.log(dataValidation.schema);

console.log(dataValidation.isValid('name', "Slavko Vuletic"));
console.log(dataValidation.isValid('name', "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(dataValidation.isValid('name', "v"));
console.log(dataValidation.isValid('name', "asndo 2 12"));
console.log();
console.log(dataValidation.isValid('username', "Slavko Vuletic"));
console.log(dataValidation.isValid('username', "v-as-s"));
console.log(dataValidation.isValid('username', "v-sasd-"));
console.log(dataValidation.isValid('username', "1"));
console.log();
console.log(dataValidation.isValid('email', "Slavko@mail"));
console.log(dataValidation.isValid('email', "asdaspdm@gmail.com"));
console.log(dataValidation.isValid('email', "asdas pdm@gmail.com"));
console.log(dataValidation.isValid('email', "v"));
console.log(dataValidation.isValid('email', "asndo 2 12"));
