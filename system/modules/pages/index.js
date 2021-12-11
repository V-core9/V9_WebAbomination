const v_fs = require('v_file_system');
const path = require('path');
const v_db = require('../../../v_db/');

const data_dir = path.join(__dirname,'data');

const v_pages = {

    _list: {},

    get_list: async () => {
        return await v_db.item.view('pages');
    },

    get_single: async (id) => {
        return await v_db.item.view('pages',id);
    },

    load_v1() {
        console.log(data_dir);
        v_fs.listDirSy(data_dir).forEach((page) => {
            var name = page.replace('.json','');
            v_pages._list[name] = require(path.join(data_dir,page));
        });
    }, 

    save_all() {
        Object.keys(v_pages._list).forEach((page) => {
            return v_fs.writeSy(path.join(__dirname,'_pages',page + '.json'), JSON.stringify(v_pages._list[page], true, 4));
        });
    },

    print_all(){
        return console.log(v_pages._list);
    },

    render : require('./render')
};

v_pages.load_v1();
//v_pages.print_all();

module.exports = v_pages;
