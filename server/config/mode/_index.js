const appMode = "dev";

switch (appMode) {
  case "dev":
    module.exports = require('./dev');

    break;

  case "test":
    module.exports = require('./test');
    break;

  default:
    module.exports = require('./live');
    break;
}
