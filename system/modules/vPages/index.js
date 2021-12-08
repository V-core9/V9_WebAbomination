const v_fs = require('v_file_system');
const path = require('path');

const v_pages = {

    _list: {},

    get(name) {
        if (Object.keys(v_pages._list).indexOf(name) === -1) return false; 
        return v_pages._list[name];
    },

    load() {
        v_fs.listDirSy(path.join(__dirname,'_pages')).forEach((page) => {
            var name = page.replace('.json','');
            v_pages._list[name] = require(path.join(__dirname,'_pages',page));
        });
    }, 

    save_all() {
        Object.keys(v_pages._list).forEach((page) => {
            return v_fs.writeSy(path.join(__dirname,'_pages',page + '.json'), JSON.stringify(v_pages._list[page], true, 4));
        });
    },

    print_all(){
        return console.log(v_pages._list);
    }

};

v_pages.load();
//v_pages.print_all();

module.exports = v_pages;
