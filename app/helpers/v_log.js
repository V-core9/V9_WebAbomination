// Example Node.js program to append data to file
var fs = require('fs');
const path = require('path');

logToFile = async (content = {}) => {
  fs.appendFile(path.join(__dirname, '../temp/app.log'), `${content.type.toUpperCase()} ${JSON.stringify(content.data)} @ ${new Date()}\n`, 'utf8',
    (err) => {
      if (err) throw err;
      // if no error
      console.log("Data is appended to file successfully.");
    });
};

const vLog = {
  log: async (...args) => await logToFile({ type: 'log', data: [...args] }),
  info: async (...args) => await logToFile({ type: 'info', data: [...args] }),
  warn: async (...args) => await logToFile({ type: 'warn', data: [...args] }),
  error: async (...args) => await logToFile({ type: 'error', data: [...args] }),
};


module.exports = vLog;
