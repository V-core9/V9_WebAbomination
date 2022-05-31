// Example Node.js program to append data to file
var fs = require('fs');
const path = require('path');
const { logToFile } = require('../config');

logger = async (content = {}) => {
  fs.appendFile(path.join(__dirname, '../temp/app.log'), `${content.type.toUpperCase()} ${JSON.stringify(content.data)} @ ${new Date()}\n`, 'utf8',
    (err) => {
      if (err) throw err;
      // if no error
      console.log("Data is appended to file successfully.");
    });
};

const vLog = {
  log: async (...args) => logToFile ? await logger({ type: 'log', data: [...args] }) : null,
  info: async (...args) => logToFile ? await logger({ type: 'info', data: [...args] }) : null,
  warn: async (...args) => logToFile ? await logger({ type: 'warn', data: [...args] }) : null,
  error: async (...args) => logToFile ? await logger({ type: 'error', data: [...args] }) : null,
};


module.exports = vLog;
