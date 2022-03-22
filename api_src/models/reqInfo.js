const vDB = require('v_database');

const reqInfoModel = {
    _tableName: 'v9_req_info',
    new:async (data) => {
        return await vDB.item.new(reqInfoModel._tableName, data);
    },
    one: async (id) => {
        return await vDB.item.one(reqInfoModel._tableName, id);
    },
    all: async () => {
        return await vDB.item.get(reqInfoModel._tableName);
    },
    up: async (id, data) => {
        return await vDB.item.save(reqInfoModel._tableName, data, id);
    },
    rm: async (id) => {
        return await vDB.item.del(reqInfoModel._tableName, id);
    }
};

module.exports = reqInfoModel;
