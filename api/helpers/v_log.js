// Example Node.js program to append data to file
var fs = require('fs');
const path = require('path');
const { devMode, logToFile, logToConsole } = require('../config');

logger = async (data = {}) => {
  if (logToFile) {
    fs.appendFile(path.join(__dirname, '../temp/app.log'), `${data.type.toUpperCase()} ${JSON.stringify(data.args)} @ ${new Date()}\n`, 'utf8',
    (err) => {
      if (err) throw err;
      // if no error
      //console.log("Data is appended to file successfully.");
    });
  }

  if (logToConsole) {
    console.log(data.type.toUpperCase(), data.args);
  }
};

const vLog = {
  log: async (...args) => devMode ? await logger({ type: 'log', args: [...args] }) : null,
  info: async (...args) => devMode ? await logger({ type: 'info', args: [...args] }) : null,
  warn: async (...args) => devMode ? await logger({ type: 'warn', args: [...args] }) : null,
  error: async (...args) => devMode ? await logger({ type: 'error', args: [...args] }) : null,
};


module.exports = vLog;
