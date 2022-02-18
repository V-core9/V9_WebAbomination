//? ASYNC versions of some default functions/methods
module.exports = asy = {
  parseJSON: async (str) => {
    return JSON.parse(str);
  },
  stringifyJSON: async (data) => {
    return JSON.stringify(data, true, 2);
  },
  parseInt: async (data) => {
    return parseInt(data);
  }
};

