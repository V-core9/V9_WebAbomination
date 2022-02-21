const { router } = require("../../../../../modules");
const {User} = require("../../../../../models");

login = async (req, res) => {
  const { email, password } = req.body;

  const user = new User();
  const data = await user.byArgs({ email: email });

  if (!data) {
    return res.status(401).json({
      message: "User not found"
    });
  }

  if (!user.validatePassword(password)) {
    return res.status(401).json({
      message: "Invalid password"
    });
  }

  const token = user.generateToken();
  return res.json({
    token
  });
};

module.exports = async () => {
  router.post('/api/auth/login', [login]);
};
