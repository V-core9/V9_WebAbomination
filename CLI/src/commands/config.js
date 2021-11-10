/*jshint esversion: 8 */
const { prompt } = require('enquirer');
const { Command, flags } = require("@oclif/command");



const questionNewOptName = [{
  type: 'input',
  name: 'newOptionName',
  message: 'What is New Option Name?'
}];

const questionNewOptVal = [{
  type: 'input',
  name: 'newOptionValue',
  message: 'What is New Option Value?'
}];



class ConfigCommand extends Command {
  static args = [
    {
      name: "action",
      required: true,
      description: "action/function/method you want it to execute",
      default: null,
      options: ["view", "create", "registerOption"],
    },
  ];
  async run() {
    // can get args as an object
    const { args } = this.parse(ConfigCommand);
    const { flags } = this.parse(ConfigCommand);

    const action = args.action || null;
    const newOptionName = flags.name || null;
    const newOptionValue = flags.value || null;

    switch (action) {
      case "view":
        const loadConfig = require("../../../universals/config/load");
        console.log(loadConfig());
        break;

      case "create":
        const [createConfig] = require("../../../universals/config/create");
        createConfig();
        const makeDirs = require("../../../universals/config/make_dirs");
        makeDirs();

        console.log("SUCCESS: Vdo_App Configuration Finished!");
        break;

      case "registerOption":
        const addOption = require("../../../universals/cfg_options/add_option");

        var newOptName = newOptionName;
        var newOptVal = newOptionValue;

        if (newOptionName === null) {
          var helpName = await prompt(questionNewOptName);
          newOptName = helpName.newOptionName;
          console.log(newOptName);
        }

        if (newOptionValue === null) {
          var helpVal = await prompt(questionNewOptVal);
          newOptVal = helpVal.newOptionValue;
          console.log(newOptVal);
        }


        console.log(addOption(newOptName,newOptVal));
        break;

      default:
        console.log("Missing Action Argument");
        break;
    }
  }
}

ConfigCommand.description = `Handles Vdo App configurations
...
Extra documentation goes here
`;

ConfigCommand.flags = {
  all: flags.string({ char: "a", description: "all" }),
  name: flags.string({ char: "n", description: "name" }),
  value: flags.string({ char: "v", description: "value" }),
};

module.exports = ConfigCommand;
