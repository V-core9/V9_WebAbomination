
const usernameSchema = {
  format: /[ `!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/,
  max_len: 40,
  min_len: 5
};

module.exports = usernameSchema;
