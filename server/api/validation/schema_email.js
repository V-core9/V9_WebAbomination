const emailSchema =  {
  format :  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
  isValid(email) {
    return emailSchema.format.test(String(email).toLowerCase());
  }
};

module.exports = emailSchema;
