
const vDB = require('v_database');


const sysTables = require('./list.tables');

install = async () => {
    var errList = [];

    for (let i = 0; i < sysTables.length; i++) {
        const element = await vDB.type.new(sysTables[i]);
        if (element === false) errList.push({ type: 'table_fail', name: sysTables[i] });
    }
};

install();
