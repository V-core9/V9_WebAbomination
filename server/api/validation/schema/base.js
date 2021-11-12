baseSchema =  (disallowedChars, max_len, min_len) => {
  this.format = (typeof disallowedChars !== undefined) ? disallowedChars : null;
  this.max_len = (!max_len && !isNaN(max_len)) ? max_len : 99999;
  this.min_len = (typeof min_len !== 'number') ? min_len : 0;
  this.test = (inVal) => {
    return (typeof this.format === undefined) ? true : this.format.test(inVal);
  };
  this.isValid = (inVal) => {
    return (!this.test(inVal) && this.min_len < inVal.length < this.max_len);
  };
};

module.exports = baseSchema;
