const { User } = require("../../models");
const user = new User();

module.exports = auth = {

  register: async (req, res) => {
    const { username, email, password, passwordConfirm } = req.body;
    const data = await user.register(email, username, password, passwordConfirm);
    return (!data) ? res.status(401).json({ message: "Failed to register new user." }) : res.status(200).json(data);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const data = await user.login(username, password);
    return (!data) ? res.status(401).json({ message: "User not found" }) : res.status(200).json(data);
  },

};
