
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

module.exports = usernameSchema;
