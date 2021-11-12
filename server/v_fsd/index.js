

const v_fsd = {

  $_data: require('./actions/get_data_types'),

  getFilesList : require('./actions/get_files_list'),
  findById(dataType, itemId) {
    try {
      var response = v_fsd.$_data[dataType][itemId];
      return typeof response === "undefined" ? false : response;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  add(data) {
    console.log(data);
  },

  remove(data) {
    try {
      //console.log(data.item_id, data.type);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  getDataTypes: require('./actions/get_data_types'),

  getDataTypesCount: require('./actions/get_data_types_count'),
};


module.exports = v_fsd;
