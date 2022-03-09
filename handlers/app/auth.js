module.exports = auth = {

  register: async (req, res) => {
    return res.status(200).end("REGISTER NEW USER PAGE HTML");
  },

  login: async (req, res) => {
      return res.status(200).end("USER LOGIN PAGE HTML");
  },

};
