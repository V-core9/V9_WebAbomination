const path = require('path');
const v_lightmapper = require('v_lightmapper');

const config = {
    protocol: "https",
    host: "v-core9.com",
    path: "sitemap_index.xml",
    reportsDir : path.join(__dirname, `vLM_reports`),
    save_to_file: true,
    disableHeadlessMode: false,
    onlyCategories : ["performance"]
};

v_lightmapper(config);
