const $_data = require('./$_data');

const getDataTypes = () => {
  try {
    return Object.keys($_data);
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = getDataTypes;
