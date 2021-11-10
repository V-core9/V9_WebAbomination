var fs = require('fs');



const write = (pathTo, textIn, cb = null) => {
  fs.writeFile(pathTo, textIn, function (err) {
    if (err) throw err;
    if (typeof cb === "function"){
      cb();
    }
  });
};


module.exports = write;
