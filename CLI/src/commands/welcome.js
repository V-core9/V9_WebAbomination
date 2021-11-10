/*jshint esversion: 8 */
const { Command, flags } = require("@oclif/command");
const welcomePageCLI = require("../../../universal_helpers/welcome_cli");

class StatusCommand extends Command {
  async run() {
    const { flags } = this.parse(StatusCommand);
    const name = flags.name || "world";
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\vdo\\src\\commands\\status.js`)
    welcomePageCLI();
  }
}

StatusCommand.description = `Describe the command here
...
Extra documentation goes here
`;

StatusCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = StatusCommand;
