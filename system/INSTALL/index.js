
const vDB = require('v_database');
const vFS = require('v_file_system');

const path = require('path');

const cleanInstall = true;


const vTables = require('../config/tables');

const vSeeds = require('./seeds');

tables_setup = async () => {
    var errList = [];
    for (let i = 0; i < Object.keys(vTables).length; i++) {
        if ( cleanInstall  === true) await vDB.type.del(vTables[Object.keys(vTables)[i]]);
        const element = await vDB.type.new(vTables[Object.keys(vTables)[i]]);
        if (element === false) errList.push({ type: 'table_fail', name: Object.keys(vTables)[i] });
    }
    return errList;
};

items_setup = async () => {
    var errList = [];
    for (let i = 0; i < vSeeds.length; i++) {
        const element = await vDB.item.new(vSeeds[i].table, JSON.parse(await vFS.read(path.join(__dirname, vSeeds[i].content))) , vSeeds[i].name !== undefined ? vSeeds[i].name : undefined);
        if (element === false) errList.push({ type: 'item_fail', name: vSeeds[i] });
    }
    return errList;
};


install = async () => {
    const types_status = await tables_setup();
    console.log(types_status.length === 0 ? 'Types Setup Successful': types_status );

    const items_status = await items_setup();
    console.log(items_status.length === 0 ? 'Items Seeds Successful Setup': items_status );
};

install();
