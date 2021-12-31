const path = require('path');
const v_lightmapper = require('v_lightmapper');
const vTables = require('./system/config/tables');
const vFS = require('v_file_system');
const vDB = require('v_database');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const config = {
    protocol: "https",
    host: "v-core9.com",
    path: "sitemap_index.xml",
    reportsDir : path.join(__dirname, `vLM_reports`),
    save_to_file: false,
    disableHeadlessMode: false,
    onlyCategories : ["performance"]
};

/*
(async() => {

    const cfgFilePath = config.reportsDir+'/v-core9.com.json';
    if (await vFS.isFile(cfgFilePath)) await vFS.deleteFile(config.reportsDir+'/v-core9.com.json');

    await v_lightmapper(config);

    const data = JSON.parse(await vFS.read('./system/INSTALL/pages/lightmap.json'));
    console.log(data);

    data.sections[1].data = await vFS.read('./vLM_reports/v-core9.com.json');

    console.log("SAVING : " + await vDB.item.new(vTables.pages, JSON.stringify(data), 'lightmap'));
})();
*/

(async() => {

    const cfgFilePath = config.reportsDir+'/v-core9.com.json';
    if (await vFS.isFile(cfgFilePath)) await vFS.deleteFile(config.reportsDir+'/v-core9.com.json');

    await v_lightmapper(config);

    var waitForJSON_Interval = setInterval(async() => {
        console.log("IS DONE?");
        if (await vFS.isFile(cfgFilePath)) {
            const data = JSON.parse(await vFS.read('./system/INSTALL/pages/lightmap.json'));
            data.sections[1].data = JSON.parse(await vFS.read('./vLM_reports/v-core9.com.json'));
            await vDB.item.new(vTables.pages, data, 'lightmap');
            console.log('YEA');
            clearInterval(waitForJSON_Interval);
            waitForJSON_Interval = null;
        } else {
            console.log('NOPE');
        }
    }, 5000);
})();
