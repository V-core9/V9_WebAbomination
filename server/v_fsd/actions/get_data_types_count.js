const getDataTypes = require('./get_data_types');

const getDataTypesCount = () => {
  try {
    return getDataTypes().length;
  } catch (error) {
    return false;
  }
};

module.exports = getDataTypesCount;
