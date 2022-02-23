const { asy } = require('../../helpers');
const { User } = require('../../models');
var userModel = new User();

module.exports = user = {

  byUsername: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await userModel.byUsername(req.params.username)));
  },

};
