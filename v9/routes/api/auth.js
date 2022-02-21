const { User } = require("../../../models");
const user = new User();

register = async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body;
  const data = await user.register(email, username, password, passwordConfirm);
  if (!data) {
    return res.status(401).json({
      message: "Failed to register new user."
    });
  } else {
    return res.status(200).json(data);
  }
};

login = async (req, res) => {
  const { username, password } = req.body;
  const data = await user.login(username, password);
  if (!data) {
    return res.status(401).json({
      message: "User not found"
    });
  } else {
    return res.status(200).json(data);
  }
};

module.exports = async (router) => {
  router.post('/api/auth/login', [login]);
  router.post('/api/auth/register', [register]);
};
