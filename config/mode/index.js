const appMode = "test";

switch (appMode) {
  case "dev":
    module.exports = require('./_dev');
    break;

  case "test":
    module.exports = require('./_test');
    break;

  default:
    module.exports = require('./_live');
    break;
}

