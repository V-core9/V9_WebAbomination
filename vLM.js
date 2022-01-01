const path = require('path');
const v_lightmapper = require('v_lightmapper');

//? Tables
const {tables} = require('./system/config/');
const vFS = require('v_file_system');
const vDB = require('v_database');

const vlm_cfg = {
    protocol: "https",
    host: "v-core9.com",
    path: "sitemap_index.xml",
    reportsDir : path.join(__dirname, `vLM_reports`),
    save_to_file: false,
    disableHeadlessMode: false,
    //onlyCategories : ["performance"]
};

(async() => {

    const cfgFilePath = vlm_cfg.reportsDir+'/'+vlm_cfg.host+'.json';
    if (await vFS.isFile(cfgFilePath)) await vFS.deleteFile(vlm_cfg.reportsDir+'/v-core9.com.json');

    await v_lightmapper(vlm_cfg);

    var waitForJSON_Interval = setInterval(async() => {
        console.log("IS DONE?");
        if (await vFS.isFile(cfgFilePath)) {
            const data = JSON.parse(await vFS.read('./system/INSTALL/pages/lightmap.json'));
            data.sections[1].data = JSON.parse(await vFS.read(cfgFilePath));
            await vDB.item.new(tables.pages, data, 'lightmap');
            console.log('YEA');
            clearInterval(waitForJSON_Interval);
            waitForJSON_Interval = null;
        } else {
            console.log('NOPE');
        }
    }, 5000);
})();
