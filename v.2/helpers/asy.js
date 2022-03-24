var stringify = require('fast-json-stable-stringify');

//? ASYNC versions of some default functions/methods
module.exports = asy = {
  parseJSON: async (str) => {
    return JSON.parse(str);
  },
  stringifyJSON: async (data) => {
    return stringify(data);
  },
  parseInt: async (data) => {
    return parseInt(data);
  }
};

