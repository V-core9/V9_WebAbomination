
const nameSchema = {
  format: /[`!@#$%^&*()_+=\[\]{};':"\\|,<>\/?~]/,
  max_len: 60,
  min_len: 2
};

module.exports = nameSchema;
