
const isBot = require('isbot');

// Turn these 2 into async functions
module.exports = async (agent) => {
    return isBot(agent);
};
