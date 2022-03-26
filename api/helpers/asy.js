var stringify = require('fast-json-stable-stringify');


//!------------------------
//? asy - helper async functions
//* 1. stringifyJSON
//* 2. parseInt
//!------------------------

module.exports = asy = {


  /*
  * Async from FAST-JSON-STABLE-STRINGIFY
  */
  stringify: async (data) => {
    try {
      return stringify(data);
    } catch (err) {
      return false;
    }
  },


  /*
  * parseInt() - Async
  */
  parseInt: async (data) => {
    return parseInt(data);
  }


};
