const description = require('./readme_base01.description');
const folders = require('./readme_base01.folders');
const install = require('./readme_base01.install');

const main_readme_template = {
    file_name: "README.md",
    scroll_title: "🚀 V9_WebAbomination",
    scroll_info: "Custom solution that uses bunch of custom stuff just to show custom things. Yea! :D ",
    layout: [
        description,
        install,
        folders
    ],
    output: "./"
};

module.exports = main_readme_template;
